import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowcardGridComponent } from '../arrowcard-grid/arrowcard-grid.component';

@Component({
  selector: 'app-arrow-points-and-banner',
  imports: [CommonModule, ArrowcardGridComponent],
  templateUrl: './arrow-points-and-banner.component.html',
  styleUrl: './arrow-points-and-banner.component.scss',
})
export class ArrowPointsAndBannerComponent {
  @Input() dataProperty;
}
