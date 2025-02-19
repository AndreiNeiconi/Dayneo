import { Injectable } from '@angular/core';
import { ProductListComponent } from '../../conteiner-prod/product-list/product-list.component';
import { ProductModels } from '../../Models/ProductsModel';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetSelectedProductService {
  // private propertySource = new BehaviorSubject<ProductModels>(null); // Use BehaviorSubject for reactive updates
  // $selectedProduct = this.propertySource.asObservable();

  // updateProperty(value: ProductModels) {
  //   this.propertySource.next(value);
  // }
  private storageKey = 'sharedVariable';

  // Save data to localStorage
  setData(data: ProductModels) {
    console.log(data)
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Retrieve data from localStorage
  getData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  // Clear data from localStorage
  clearData() {
    localStorage.removeItem(this.storageKey);
  }

}
