import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from "../../Components/card/card.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Servises/Product/product.service';
import { ProductResponse } from '../../Interfaces/product-response';
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.get_products()
  }
  
  productService = inject(ProductService)
  respostas?: ProductResponse[]

  get_products(){
    this.productService
      .get_products()
      .subscribe({
        next:(val: any)=>{
          this.respostas = val
        }
      })
  }
}
