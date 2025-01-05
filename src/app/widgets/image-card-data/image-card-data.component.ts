import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-card-data',
  imports: [CommonModule],
  templateUrl: './image-card-data.component.html',
  styleUrl: './image-card-data.component.scss'
})
export class ImageCardDataComponent {
  @Input() dataProperty: any;


  constructor() {
    setTimeout(() => {
      // console.log(this.dataProperty)
      console.warn(this.dataProperty?.three_card?.cardData?.container?.items )
    }, 1000);
  }
}
