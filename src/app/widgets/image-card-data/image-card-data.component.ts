import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-image-card-data',
  imports: [CommonModule],
  templateUrl: './image-card-data.component.html',
  styleUrl: './image-card-data.component.scss'
})
export class ImageCardDataComponent extends BaseDataReciever {
}
