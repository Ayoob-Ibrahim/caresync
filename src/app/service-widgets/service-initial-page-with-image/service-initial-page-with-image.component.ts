import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-initial-page-with-image',
  imports: [CommonModule],
  templateUrl: './service-initial-page-with-image.component.html',
  styleUrl: './service-initial-page-with-image.component.scss'
})
export class ServiceInitialPageWithImageComponent extends BaseDataReciever {

}