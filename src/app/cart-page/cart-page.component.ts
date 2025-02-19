import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AddToCartService } from '../service/shoping-cart/add-to-cart.service';
import { ProductModels } from '../Models/ProductsModel';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItem:ProductModels;
  qnt:number=1;
  totalPrice:number
  storageKeyValue:string[];
  constructor(private getCartService:AddToCartService){


  }
  ngOnInit(){

    this.cartItem = this.getCartService.getData();



  }



  

}
