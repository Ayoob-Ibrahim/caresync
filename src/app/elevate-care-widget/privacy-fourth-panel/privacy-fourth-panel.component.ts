import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privacy-fourth-panel',
  imports: [CommonModule],
  templateUrl: './privacy-fourth-panel.component.html',
  styleUrl: './privacy-fourth-panel.component.scss',
})
export class PrivacyFourthPanelComponent {
  @Input() data;
}
