import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../baseclass/parent-data-reciever';

@Component({
  selector: 'app-data-unavailabilty',
  imports: [CommonModule],
  templateUrl: './data-unavailabilty.component.html',
  styleUrl: './data-unavailabilty.component.scss'
})
export class DataUnavailabiltyComponent extends BaseDataReciever {

}
