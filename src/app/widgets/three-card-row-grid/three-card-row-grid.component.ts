import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-three-card-row-grid',
  imports: [CommonModule],
  templateUrl: './three-card-row-grid.component.html',
  styleUrl: './three-card-row-grid.component.scss'
})
export class ThreeCardRowGridComponent extends BaseDataReciever {

}
