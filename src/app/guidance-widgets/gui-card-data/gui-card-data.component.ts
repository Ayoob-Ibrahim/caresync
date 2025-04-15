import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-gui-card-data',
  imports: [CommonModule],
  templateUrl: './gui-card-data.component.html',
  styleUrl: './gui-card-data.component.scss'
})
export class GuiCardDataComponent extends BaseDataReciever {
  override dataProperty: any = {
    bgcolor: '#dbf5ef'
  }
}
