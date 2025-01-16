import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-row-content',
  imports: [CommonModule],
  templateUrl: './three-row-content.component.html',
  styleUrl: './three-row-content.component.scss'
})
export class ThreeRowContentComponent extends BaseDataReciever {

}
