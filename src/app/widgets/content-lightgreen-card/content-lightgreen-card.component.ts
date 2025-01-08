import { Component, Input } from '@angular/core';
import { LightgreenGridBoxComponent } from '../lightgreen-grid-box/lightgreen-grid-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-lightgreen-card',
  imports: [LightgreenGridBoxComponent, CommonModule],
  templateUrl: './content-lightgreen-card.component.html',
  styleUrl: './content-lightgreen-card.component.scss',
})
export class ContentLightgreenCardComponent {
  @Input() dataProperty;
}
