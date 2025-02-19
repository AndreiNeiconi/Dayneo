import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroudColor:string = 'black';
  @HostBinding('style.border') border:string = 'none';
  @HostBinding('style.color') textColor:string = '#fff';

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroudColor = '#fff';
    this.border= '#28282D 2px solid';
    this.textColor = "#28282D";
  }
  @HostListener('mouseout') onMouseOut(){
    this.backgroudColor = '#000';
    this.border= 'none';
    this.textColor = "#fff";
  }
  
}
