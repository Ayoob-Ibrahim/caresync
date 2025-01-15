import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-list-vertical-cards-in-service',
  imports: [CommonModule],
  templateUrl: './list-vertical-cards-in-service.component.html',
  styleUrl: './list-vertical-cards-in-service.component.scss'
})
export class ListVerticalCardsInServiceComponent extends BaseDataReciever {

}
