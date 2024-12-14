import { Component, Input } from '@angular/core';
import { serviceCardData } from '../../interface/common.interface';

@Component({
  selector: 'app-vertical-cards',
  imports: [],
  templateUrl: './vertical-cards.component.html',
  styleUrl: './vertical-cards.component.scss'
})
export class VerticalCardsComponent {
  @Input() data: serviceCardData;
}
