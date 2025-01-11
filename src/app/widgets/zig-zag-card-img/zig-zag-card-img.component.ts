import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-zig-zag-card-img',
  imports: [CommonModule],
  templateUrl: './zig-zag-card-img.component.html',
  styleUrl: './zig-zag-card-img.component.scss'
})
export class ZigZagCardImgComponent extends BaseDataReciever {

}
