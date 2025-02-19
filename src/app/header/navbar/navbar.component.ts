import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/service/shoping-cart/add-to-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartService:AddToCartService){

  }
  getTotalProductInCart(){
    return this.cartService.getProductCount().toString()
  }
}
