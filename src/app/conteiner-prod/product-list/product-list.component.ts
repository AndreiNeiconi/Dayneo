import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductModels } from 'src/app/Models/ProductsModel';
import { GetProductsService } from 'src/app/service/get-product/get-products.service';
import { GetSelectedProductService } from 'src/app/service/get-selected-product/get-selected-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProdact:ProductModels;
  allProducts:ProductModels[];

  totalProductCount:number;
  totalProdunctInStok:number;
  totalProdunctOutOfStok:number;
    

    @Input()
    serchText:string=''

    selectedFilterRadioButton:string = "all"

    onFilterChanged(value:string){
      // console.log(value)
      this.selectedFilterRadioButton = value
    }


    // new part
    
    constructor(private http:HttpClient,private getProductServices:GetProductsService, private selectedProductService:GetSelectedProductService){}
    ngOnInit() {
        // this.selectedProductService.$selectedProduct.subscribe(selected => this.selectedProdact = selected)
        this.fetchingProd()
        
      }

    fetchingProd(){
      this.getProductServices.getProduct().subscribe((products)=>{
        this.allProducts = products
        
      })
      return this.allProducts
    }

    //this returt the selected product to the seletedproduct service to be use in othere component
    getSelectedProduct(Product){
      // this.selectedProductService.updateProperty(Product)
      // console.log(Product)
      this.selectedProductService.setData(Product)
    }
  
    getAllFilters(){
      this.totalProductCount = this.allProducts.length
      return this.totalProductCount
    }
    getInStockFilters(){
      // this.totalProdunctInStok = 0; 
      // this.allProducts.filter((p)=>{
      //   if(p.is_in_inventory == "true"){
      //     this.totalProductCount+=1;
      //   }

      // });
  
      return 2
      
   
    }
    getOutStockFilters(){
      this.totalProductCount = this.allProducts.filter(p =>{
        p.is_in_inventory=== 'false'
      }).length
      return this.totalProductCount
    }
  }
  
  // products:any = [
  //   {
  //     id: 1,
  //     name: "suc de mere",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 15,
  //     discauntPrice: 12,
  //     is_in_inventory: true,
  //     items_left: 33,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_mere",
  //     nutrientValue: ["Kcal", "120Kkal", "proteine", "12g", "grasimii", "5g", "din care acizi grasi saturati", "2g", "glucide", "17g", "din care zaharuri", "5g", "sodiu", "0,01g"],
  //   },
  //   {
  //     id: 2,
  //     name: "suc de pere",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 15,
  //     is_in_inventory: true,
  //     items_left: 67,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_pere",
  //     nutrientValue: ["Kcal", "130Kkal", "proteine", "10g", "grasimii", "8g", "din care acizi grasi saturati", "2g", "glucide", "15g", "din care zaharuri", "3g", "sodiu", "0,01g"],
  //   },
  //   {
  //     id: 3,
  //     name: "suc de struguri",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"2L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 18,
  //     discauntPrice: 15,
  //     is_in_inventory: true,
  //     items_left: 10,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_struguri",
  //     nutrientValue: ["Kcal", "125Kkal", "proteine", "11g", "grasimii", "4g", "din care acizi grasi saturati", "1g", "glucide", "20g", "din care zaharuri", "6g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 4,
  //     name: "suc de portocale",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 12,
  //     is_in_inventory: true,
  //     items_left: 50,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_portocale",
  //     nutrientValue: ["Kcal", "110Kkal", "proteine", "9g", "grasimii", "3g", "din care acizi grasi saturati", "1g", "glucide", "19g", "din care zaharuri", "7g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 5,
  //     name: "suc de fructe de padure",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 22,
  //     discauntPrice: 18,
  //     is_in_inventory: true,
  //     items_left: 30,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_fructe_padure",
  //     nutrientValue: ["Kcal", "140Kkal", "proteine", "8g", "grasimii", "7g", "din care acizi grasi saturati", "2g", "glucide", "18g", "din care zaharuri", "6g", "sodiu", "0,03g"],
  //   },
  //   {
  //     id: 6,
  //     name: "nectar de piersici",
  //     type: "nectar",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 20,
  //     discauntPrice: 16,
  //     is_in_inventory: true,
  //     items_left: 15,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "nectar_de_piersici",
  //     nutrientValue: ["Kcal", "130Kkal", "proteine", "6g", "grasimii", "5g", "din care acizi grasi saturati", "1g", "glucide", "15g", "din care zaharuri", "8g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 7,
  //     name: "suc de mango",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"2L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 25,
  //     is_in_inventory: false,
  //     items_left: 0,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_mango",
  //     nutrientValue: ["Kcal", "150Kkal", "proteine", "8g", "grasimii", "6g", "din care acizi grasi saturati", "1g", "glucide", "22g", "din care zaharuri", "10g", "sodiu", "0,01g"],
  //   },
  //   {
  //     id: 8,
  //     name: "suc de cirese",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"3L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 18,
  //     discauntPrice: 14,
  //     is_in_inventory: true,
  //     items_left: 12,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_cirese",
  //     nutrientValue: ["Kcal", "125Kkal", "proteine", "10g", "grasimii", "4g", "din care acizi grasi saturati", "1g", "glucide", "17g", "din care zaharuri", "8g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 9,
  //     name: "sirop de zmeura",
  //     type: "sirop",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 28,
  //     discauntPrice: 24,
  //     is_in_inventory: true,
  //     items_left: 20,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "sirop_de_zmeura",
  //     nutrientValue: ["Kcal", "160Kkal", "proteine", "6g", "grasimii", "9g", "din care acizi grasi saturati", "2g", "glucide", "20g", "din care zaharuri", "10g", "sodiu", "0,03g"],
  //   },
  //   {
  //     id: 10,
  //     name: "suc de afine",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 30,
  //     is_in_inventory: true,
  //     items_left: 5,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_afine",
  //     nutrientValue: ["Kcal", "135Kkal", "proteine", "7g", "grasimii", "6g", "din care acizi grasi saturati", "2g", "glucide", "18g", "din care zaharuri", "7g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 11,
  //     name: "sirop de capsuni",
  //     type: "sirop",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 32,
  //     discauntPrice: 28,
  //     is_in_inventory: true,
  //     items_left: 10,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "sirop_de_capsuni",
  //     nutrientValue: ["Kcal", "170Kkal", "proteine", "5g", "grasimii", "7g", "din care acizi grasi saturati", "2g", "glucide", "25g", "din care zaharuri", "15g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 12,
  //     name: "nectar de prune",
  //     type: "nectar",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 20,
  //     discauntPrice: 15,
  //     is_in_inventory: true,
  //     items_left: 40,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "nectar_de_prune",
  //     nutrientValue: ["Kcal", "145Kkal", "proteine", "10g", "grasimii", "5g", "din care acizi grasi saturati", "1g", "glucide", "22g", "din care zaharuri", "12g", "sodiu", "0,03g"],
  //   },
  //   {
  //     id: 13,
  //     name: "suc de lamaie",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"2L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 18,
  //     is_in_inventory: true,
  //     items_left: 20,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_lamaie",
  //     nutrientValue: ["Kcal", "100Kkal", "proteine", "4g", "grasimii", "2g", "din care acizi grasi saturati", "0.5g", "glucide", "15g", "din care zaharuri", "6g", "sodiu", "0,01g"],
  //   },
  //   {
  //     id: 14,
  //     name: "sirop de portocale",
  //     type: "sirop",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 35,
  //     discauntPrice: 30,
  //     is_in_inventory: true,
  //     items_left: 25,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "sirop_de_portocale",
  //     nutrientValue: ["Kcal", "175Kkal", "proteine", "7g", "grasimii", "8g", "din care acizi grasi saturati", "3g", "glucide", "27g", "din care zaharuri", "12g", "sodiu", "0,03g"],
  //   },
  //   {
  //     id: 15,
  //     name: "suc de grapefruit",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"3L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 27,
  //     is_in_inventory: false,
  //     items_left: 0,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_grapefruit",
  //     nutrientValue: ["Kcal", "115Kkal", "proteine", "6g", "grasimii", "4g", "din care acizi grasi saturati", "1g", "glucide", "21g", "din care zaharuri", "9g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 16,
  //     name: "suc de banane",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 30,
  //     is_in_inventory: true,
  //     items_left: 18,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_banane",
  //     nutrientValue: ["Kcal", "160Kkal", "proteine", "12g", "grasimii", "3g", "din care acizi grasi saturati", "1g", "glucide", "28g", "din care zaharuri", "15g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 17,
  //     name: "nectar de mar si morcov",
  //     type: "nectar",
  //     categori: "sucuri si siropuri",
  //     size:"0,5L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 18,
  //     discauntPrice: 15,
  //     is_in_inventory: true,
  //     items_left: 12,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "nectar_mar_morcov",
  //     nutrientValue: ["Kcal", "120Kkal", "proteine", "8g", "grasimii", "4g", "din care acizi grasi saturati", "1g", "glucide", "19g", "din care zaharuri", "9g", "sodiu", "0,01g"],
  //   },
  //   {
  //     id: 18,
  //     name: "suc de coacaze negre",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"3L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 26,
  //     is_in_inventory: true,
  //     items_left: 8,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_coacaze_negre",
  //     nutrientValue: ["Kcal", "150Kkal", "proteine", "6g", "grasimii", "3g", "din care acizi grasi saturati", "1g", "glucide", "21g", "din care zaharuri", "11g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 19,
  //     name: "suc de smochine",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"1L",
  //     availableSize:["0,5L","1L","2L","3L"],
  //     price: 34,
  //     is_in_inventory: true,
  //     items_left: 10,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_smochine",
  //     nutrientValue: ["Kcal", "180Kkal", "proteine", "10g", "grasimii", "8g", "din care acizi grasi saturati", "2g", "glucide", "30g", "din care zaharuri", "15g", "sodiu", "0,02g"],
  //   },
  //   {
  //     id: 20,
  //     name: "suc de prune",
  //     type: "suc",
  //     categori: "sucuri si siropuri",
  //     size:"3L",
  //     availebaleSize:["0,5L","1L","2L","3L"],
  //     price: 22,
  //     discauntPrice: 18,
  //     is_in_inventory: true,
  //     items_left: 14,
  //     imageUrl: "https://sucaroma.ro/wp-content/uploads/2020/04/mere-1l.png",
  //     slug: "suc_de_prune",
  //     nutrientValue: ["Kcal", "145Kkal", "proteine", "8g", "grasimii", "5g", "din care acizi grasi saturati", "1g", "glucide", "20g", "din care zaharuri", "12g", "sodiu", "0,03g"],
  //   },
  // ];