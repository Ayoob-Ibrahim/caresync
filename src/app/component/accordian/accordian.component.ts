import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [CommonModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
  animations: [
    trigger('contentAnimation', [
      state('hidden', style({
        height: '0px',
        opacity: 0,
        padding: '0',
      })),
      state('visible', style({
        height: '*',
        opacity: 1,
        padding: '1rem',
      })),
      transition('hidden <=> visible', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class AccordianComponent {
@Input() accordData;


selectIndex(index,event){



console.log(index,"asas")
//  setTimeout(()=>{
  if(index == this.accordData.selectedIndex()){
    this.accordData.selectedIndex.set(null);
  }else{
    this.accordData.selectedIndex.set(index);
  }

  // event.stopPropagation(); // Stops the click event from bubbling up to the parent

//  },500)
  // console.log(index,this.accordData.selectedIndex(),"after")
}
}
