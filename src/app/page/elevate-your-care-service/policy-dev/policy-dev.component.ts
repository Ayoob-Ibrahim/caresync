import { Component, signal } from '@angular/core';
import policy from '../../../json-data/policy-development.json';
import { CommonModule } from '@angular/common';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';
import { PolicyDevInitCardComponent } from '../../../elevate-care-widget/policy-dev-init-card/policy-dev-init-card.component';
import { PrivacyGreencardComponent } from '../../../elevate-care-widget/privacy-greencard/privacy-greencard.component';
import { ImageWithGridComponent } from '../../../elevate-care-widget/image-with-grid/image-with-grid.component';
import { PrivacyFourthPanelComponent } from '../../../elevate-care-widget/privacy-fourth-panel/privacy-fourth-panel.component';
import { DynamicParaWithImageComponent } from '../../../widgets/dynamic-para-with-image/dynamic-para-with-image.component';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
import { FreequentlyAskedComponent } from '../../../widgets/freequently-asked/freequently-asked.component';
@Component({
  selector: 'app-policy-dev',
  imports: [
    CommonModule,
    PolicyDevInitCardComponent,
    PrivacyFourthPanelComponent,
    PrivacyGreencardComponent,
    ImageWithGridComponent,
    DynamicParaWithImageComponent,
    HorizontalCardComponent,
    FreequentlyAskedComponent,
  ],
  templateUrl: './policy-dev.component.html',
  styleUrl: './policy-dev.component.scss',
})
export class PolicyDevComponent {
  guidance: any = policy;
  selecteData: any = signal(null);
  selectIndex(index, event) {
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }
  }
}
