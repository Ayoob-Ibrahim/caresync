import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [CommonModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
  animations: [
    trigger('accordionState', [
      state(
        'closed',
        style({
          height: '0px',
          overflow: 'hidden',
          padding: '0px',
          visibility: 'hidden',

          opacity: '0',
        })
      ),
      state(
        'open',
        style({
          height: '*', // Automatically calculates height
          overflow: 'hidden',
          padding: '1rem',
          visibility: 'visible',
          opacity: '1',
        })
      ),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class AccordianComponent {
  @Input() accordData;

  selectIndex(index, event) {
    console.log(index, 'asas');
    //  setTimeout(()=>{
    if (index == this.accordData.selectedIndex()) {
      this.accordData.selectedIndex.set(null);
    } else {
      this.accordData.selectedIndex.set(index);
    }

    //  },500)
    // console.log(index,this.accordData.selectedIndex(),"after")
  }
}
