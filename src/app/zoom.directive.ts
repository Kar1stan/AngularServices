import { Directive ,ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize='20px'
   }
   @Input('appZoom')size:any
 @HostListener('mouseenter')onmouseEnter(){
  this.setFontSize(20)
 }
 @HostListener('mouseleave') onMouseLeave(){
  this.setFontSize(15)
 }
 setFontSize(size:number|string):void{
   this.el.nativeElement.style.fontSize='${size}px'
 }
}
