import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-gui-img-data',
  imports: [CommonModule],
  templateUrl: './gui-img-data.component.html',
  styleUrl: './gui-img-data.component.scss'
})
export class GUIImgDataComponent extends BaseDataReciever {
}
