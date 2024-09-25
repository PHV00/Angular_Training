import { Component, OnInit , inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../Servises/Product/product.service';
import { ProductCompleteResponse } from '../../Interfaces/product-complete-response';
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})

//https://stackoverflow.com/questions/44821287/adding-parameter-to-angular-router-navigate

export class BuyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  
  productService = inject(ProductService)

  id = 0;

  response?: ProductCompleteResponse

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.id = params['id']);
    this.get_product()
  }
  
  get_product(){
    this.productService
      .get_product(this.id)
      .subscribe({
        next:(val: ProductCompleteResponse)=>{
          this.response= val
          console.log(val)
        }
      })
  }
}