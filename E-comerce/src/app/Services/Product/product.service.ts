import { Injectable , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor(private http : HttpClient) { }

  _http = inject(HttpClient)

  con = 'https://dummyjson.com/products'

  con2 = 'https://dummyjson.com/product/'

  get_products(){
    return this._http
      .get(this.con)
      .pipe(
        map((res:any)=>{
          return  res.products
        })
      )
  }
  get_product(id: number){
    return this._http
      .get(this.con2.concat(id.toString()))
      .pipe(
        map((res:any)=>{
          return  res
        })
      )
  }

}
