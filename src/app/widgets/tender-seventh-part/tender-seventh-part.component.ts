import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { title } from 'process';

@Component({
  selector: 'app-tender-seventh-part',
  imports: [CommonModule],
  templateUrl: './tender-seventh-part.component.html',
  styleUrl: './tender-seventh-part.component.scss',
})
export class TenderSeventhPartComponent extends BaseDataReciever {
  data = [
    {
      title: 'Care & Grace Ltd',
      websitelink: '',
      image: '../../../assets/our-services/1-slide.png',
    },
    {
      title: 'Light Health Care Ltd',
      websitelink: '',
      image: '../../../assets/our-services/2-slide.png',
    },
    {
      title: 'Living Plus Care Services ',
      websitelink: '',
      image: '../../../assets/our-services/1-slide.png',
    },
  ];
}
