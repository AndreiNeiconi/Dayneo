import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductModels } from 'src/app/Models/ProductsModel';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent {

  @Input() productlistCom:ProductListComponent = undefined;
  product:ProductModels;
  toggle:boolean = true;
  ngOnInit(){
    this.product = this.productlistCom.selectedProdact;
  }
}
