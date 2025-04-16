import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gui-card-custom-title',
  imports: [CommonModule],
  templateUrl: './gui-card-custom-title.component.html',
  styleUrl: './gui-card-custom-title.component.scss'
})
export class GuiCardCustomTitleComponent extends BaseDataReciever {

}
