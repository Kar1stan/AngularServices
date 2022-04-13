import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title='DataBinding';
 text:string="";
 money=["US Dollars","Zimbabwe dollars","Yens","Sterlings"];
 percentage:number=0.15;
 counter:number=0;
 up(){
   this.counter++
 }
 down(){
   this.counter--
 }
 addText(){
  this.text+="...and text"
}
}
