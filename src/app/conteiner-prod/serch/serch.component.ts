import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {


  serchText:string = "";

  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('serchInput',{static:false})serchInputElement:ElementRef;
  onSearchTextChange(){

  }

  updateSearchText(){
    // this.serchText =event.target.value
    // console.log(input.value)
    this.serchText = this.serchInputElement.nativeElement.value
    this.searchTextChange.emit(this.serchText)
  }
}
