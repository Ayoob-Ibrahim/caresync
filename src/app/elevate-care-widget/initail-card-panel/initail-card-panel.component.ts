import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-initail-card-panel',
  imports: [CommonModule],
  templateUrl: './initail-card-panel.component.html',
  styleUrl: './initail-card-panel.component.scss'
})
export class InitailCardPanelComponent extends BaseDataReciever {
}
