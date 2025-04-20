import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-card-skeleton',
  imports: [CommonModule],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss'
})
export class CardSkeletonComponent extends BaseDataReciever {

}
