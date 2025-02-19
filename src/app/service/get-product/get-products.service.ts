import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductModels } from '../../Models/ProductsModel';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService  {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<{[key:string] :ProductModels}>('https://neiconidev-default-rtdb.firebaseio.com/products.json').pipe(map((res)=>{
      const products = []
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }

      }
      console.log(products)
      return products
    }))
  }
}
