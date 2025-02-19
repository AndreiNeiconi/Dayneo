import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { ConteinerProdComponent } from './conteiner-prod/conteiner-prod.component';
import { SerchComponent } from './conteiner-prod/serch/serch.component';
import { ProductListComponent } from './conteiner-prod/product-list/product-list.component';
import { ProductComponent } from './conteiner-prod/product-list/product/product.component';
import { FilterComponent } from './conteiner-prod/product-list/filter/filter.component';
import { ProductDetalisComponent } from './conteiner-prod/product-detalis/product-detalis.component';
import { FeaturedProductComponent } from './conteiner-prod/featured-product/featured-product.component';
import { SetBackground } from './customDirective/SetBackground.directive';
import { HighlightDirective } from './customDirective/highlight.directive';
import { AppHoverDirective } from './customDirective/app-hover.directive';
import { DisableProductDirective } from './customDirective/disable-product.directive';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPresentationComponent } from './product-page/product-presentation/product-presentation.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CartPageComponent } from './cart-page/cart-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ConteinerProdComponent,
    SerchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetalisComponent,
    FeaturedProductComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
    ProductPageComponent,
    HomePageComponent,
    ProductPresentationComponent,
    NavbarComponent,
    CartPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
