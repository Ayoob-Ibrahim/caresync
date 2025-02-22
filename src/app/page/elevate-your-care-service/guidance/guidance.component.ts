import { Component, signal } from '@angular/core';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';
import guidance_json from '../../../json-data/guidance.json';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from "../../../widgets/horizontal-card/horizontal-card.component";
import { FreequentlyAskedComponent } from "../../../widgets/freequently-asked/freequently-asked.component";
@Component({
  selector: 'app-guidance',
  imports: [InitailCardPanelComponent, CommonModule, HorizontalCardComponent, FreequentlyAskedComponent],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.scss'
})
export class GuidanceComponent {
  guidance = guidance_json;
  selecteData: any = signal(null);
  selectIndex(index, event) {
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }

  }
}
