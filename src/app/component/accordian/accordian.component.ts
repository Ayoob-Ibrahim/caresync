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
<<<<<<< HEAD

          opacity: '0',
=======
>>>>>>> 412c73a90b578d08e6b949635daa4bf03e37c1c7
        })
      ),
      state(
        'open',
        style({
          height: '*', // Automatically calculates height
          overflow: 'hidden',
          padding: '1rem',
          visibility: 'visible',
<<<<<<< HEAD
          opacity: '1',
=======
>>>>>>> 412c73a90b578d08e6b949635daa4bf03e37c1c7
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
