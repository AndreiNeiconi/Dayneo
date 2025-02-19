import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"",component:HomePageComponent},
  {path:"product-page",component:ProductPageComponent},
  {path:"cart-page",component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
