import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { SvgComponent } from '../../component/svg/svg.component';

@Component({
  selector: 'app-image-card-data',
  imports: [CommonModule, SvgComponent],
  templateUrl: './image-card-data.component.html',
  styleUrl: './image-card-data.component.scss'
})
export class ImageCardDataComponent extends BaseDataReciever {
}
