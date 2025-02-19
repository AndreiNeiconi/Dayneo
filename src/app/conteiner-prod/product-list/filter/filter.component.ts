import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:Number =0;
  @Input()
  inStock:Number =0;
  @Input()
  outOfStok:Number =0;

  @Output()
  selectedFilterRadioButtonChange:EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton:string= 'all';

  onSelectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
    console.log(this.all,this.inStock,this.outOfStok)
  }
} 
