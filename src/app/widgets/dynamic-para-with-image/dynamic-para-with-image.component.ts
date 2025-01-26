import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';
import { data } from 'jquery';

@Component({
  selector: 'app-dynamic-para-with-image',
  imports: [CommonModule],
  templateUrl: './dynamic-para-with-image.component.html',
  styleUrl: './dynamic-para-with-image.component.scss',
})
export class DynamicParaWithImageComponent extends BaseDataReciever {}
