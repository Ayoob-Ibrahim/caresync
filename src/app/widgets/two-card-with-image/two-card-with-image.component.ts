import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TiltComponent } from '../../component/tilt/tilt.component';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-two-card-with-image',
  imports: [CommonModule, TiltComponent],
  templateUrl: './two-card-with-image.component.html',
  styleUrl: './two-card-with-image.component.scss'
})
export class TwoCardWithImageComponent extends BaseDataReciever {

}
