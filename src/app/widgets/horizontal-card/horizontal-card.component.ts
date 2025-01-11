import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-horizontal-card',
  imports: [CommonModule],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.scss'
})
export class HorizontalCardComponent extends BaseDataReciever {

}
