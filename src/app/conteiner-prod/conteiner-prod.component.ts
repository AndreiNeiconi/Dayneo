import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-conteiner-prod',
  templateUrl: './conteiner-prod.component.html',
  styleUrls: ['./conteiner-prod.component.css']
})
export class ConteinerProdComponent {



  serchText:string = '';

  @ViewChild(ProductListComponent) prductListComponent:ProductListComponent;

  setSerchText(value:string){
    this.serchText= value;
  }
}
