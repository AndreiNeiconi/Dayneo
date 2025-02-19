import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../service/get-product/get-products.service';
import { GetSelectedProductService } from '../service/get-selected-product/get-selected-product.service';
import { ProductModels } from '../Models/ProductsModel';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  selectedProdact:ProductModels

constructor(private selectedProductService:GetSelectedProductService){}


ngOnInit() {
  // this.selectedProductService.$selectedProduct.subscribe(selected => this.selectedProdact= selected)
  // console.log(this.selectedProdact)
  this.selectedProdact = this.selectedProductService.getData()
  console.log(this.selectedProdact)
}



}
