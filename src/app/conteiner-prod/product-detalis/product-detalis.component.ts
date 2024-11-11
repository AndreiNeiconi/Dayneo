import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent {

  @Input() productlistCom:ProductListComponent = undefined;
  product:Product;

  ngOnInit(){
    this.product = this.productlistCom.selectedProdact;
    console.log(this.product.availableSize);
  }
}
