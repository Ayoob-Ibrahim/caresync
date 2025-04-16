import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gui-img-with-list-card',
  imports: [CommonModule],
  templateUrl: './gui-img-with-list-card.component.html',
  styleUrl: './gui-img-with-list-card.component.scss'
})
export class GuiImgWithListCardComponent extends BaseDataReciever {

}
