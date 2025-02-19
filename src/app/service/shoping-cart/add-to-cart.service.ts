import { Injectable } from '@angular/core';
import { ProductModels } from 'src/app/Models/ProductsModel';
import { ProductStorageModels } from 'src/app/Models/StorageModules';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  
  storageKey:string[]=[];
  private storageKeySelected:string= "selectedProduct";
  private dataModules:ProductStorageModels;



    // Save data to localStorage
    setData(data: ProductModels) {
      localStorage.setItem(this.storageKeySelected, JSON.stringify(data));
      localStorage.setItem(data.name, JSON.stringify(data));
      

      
      
      
      


    }
  
    // Retrieve data from localStorage
    getData() {
      const data = localStorage.getItem(this.storageKeySelected);
      return data ? JSON.parse(data) : null;
    }
  
    // Clear data from localStorage
    clearData() {
      localStorage.removeItem(this.storageKeySelected);
    }
    getProductCount(){
      if(localStorage.length >0){
        return localStorage.length-1
      }else{
        return 0
      }
      
    }
    
  
}
