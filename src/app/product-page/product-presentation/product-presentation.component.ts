import { Component, Input, OnInit } from '@angular/core';
import { ProductModels } from 'src/app/Models/ProductsModel';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {

  
  @Input()
  Product:ProductModels ;
  ngOnInit(): void {
    console.log(this.Product)
}


}
