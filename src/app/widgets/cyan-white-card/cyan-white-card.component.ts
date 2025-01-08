import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-cyan-white-card',
  imports: [CommonModule],
  templateUrl: './cyan-white-card.component.html',
  styleUrl: './cyan-white-card.component.scss'
})
export class CyanWhiteCardComponent extends BaseDataReciever {
}
