import { Component, signal } from '@angular/core';
import { BusinesstraingFullWithInitpanelComponent } from '../../../elevate-care-widget/businesstraing-full-with-initpanel/businesstraing-full-with-initpanel.component';
import business from '../../../json-data/business-traing.json';
import { BusinessSecondComponent } from '../../../elevate-care-widget/business-second/business-second.component';
import { ImageWithGridComponent } from '../../../elevate-care-widget/image-with-grid/image-with-grid.component';
import { BusinessFourthComponent } from '../../../elevate-care-widget/business-fourth/business-fourth.component';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
import { BussinessFifthComponent } from '../../../elevate-care-widget/bussiness-fifth/bussiness-fifth.component';
import { FreequentlyAskedComponent } from '../../../widgets/freequently-asked/freequently-asked.component';
@Component({
  selector: 'app-business-training',
  imports: [
    BusinesstraingFullWithInitpanelComponent,
    BusinessSecondComponent,
    ImageWithGridComponent,
    BusinessFourthComponent,
    HorizontalCardComponent,
    BussinessFifthComponent,
    FreequentlyAskedComponent,
  ],
  templateUrl: './business-training.component.html',
  styleUrl: './business-training.component.scss',
})
export class BusinessTrainingComponent {
  guidance: any = business;
  selecteData: any = signal(null);
  selectIndex(index, event) {
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }
  }
}
