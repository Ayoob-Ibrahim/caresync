import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-featurebanner',
  imports: [CommonModule],
  templateUrl: './email-featurebanner.component.html',
  styleUrl: './email-featurebanner.component.scss',
})
export class EmailFeaturebannerComponent {
  @Input() dataProperty;
}
