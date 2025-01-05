import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-card-data',
  imports: [CommonModule],
  templateUrl: './image-card-data.component.html',
  styleUrl: './image-card-data.component.scss'
})
export class ImageCardDataComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      console.warn(this.cardData,'carda')
    }, 0);
  }
  @Input() cardData: any;

}
