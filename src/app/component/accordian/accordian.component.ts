import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {
@Input() accordData;


selectIndex(){
  if(this.accordData.index == this.accordData.selectedIndex()){
    this.accordData.selectedIndex.set(null);
  }else{
    this.accordData.selectedIndex.set(this.accordData.index);
    console.log(this.accordData.selectedIndex());
  }

}
}
