import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductModels } from 'src/app/Models/ProductsModel';
import { AddToCartService } from 'src/app/service/shoping-cart/add-to-cart.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cart:AddToCartService){

  }
  @Input()
  product:Product;
  @Input()
  prod:ProductModels
  addToCart(Product){
    this.cart.setData(Product);

  }
  
  
}
