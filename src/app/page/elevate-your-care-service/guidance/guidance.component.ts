import { Component } from '@angular/core';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';
import guidance_json from '../../../json-data/guidance.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-guidance',
  imports: [InitailCardPanelComponent, CommonModule],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.scss'
})
export class GuidanceComponent {
  guidance = guidance_json;
}
