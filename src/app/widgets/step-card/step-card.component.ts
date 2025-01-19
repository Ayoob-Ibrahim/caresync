import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-step-card',
  imports: [CommonModule],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.scss',
})
export class StepCardComponent extends BaseDataReciever {}
