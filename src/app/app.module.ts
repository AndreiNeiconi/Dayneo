import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { ConteinerProdComponent } from './conteiner-prod/conteiner-prod.component';
import { SerchComponent } from './conteiner-prod/serch/serch.component';
import { ProductListComponent } from './conteiner-prod/product-list/product-list.component';
import { ProductComponent } from './conteiner-prod/product-list/product/product.component';
import { FilterComponent } from './conteiner-prod/product-list/filter/filter.component';
import { ProductDetalisComponent } from './conteiner-prod/product-detalis/product-detalis.component';



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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
