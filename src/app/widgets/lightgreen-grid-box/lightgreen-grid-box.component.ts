import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightgreen-grid-box',
  imports: [CommonModule],
  templateUrl: './lightgreen-grid-box.component.html',
  styleUrl: './lightgreen-grid-box.component.scss',
})
export class LightgreenGridBoxComponent {
  @Input() dataProperty;
}
