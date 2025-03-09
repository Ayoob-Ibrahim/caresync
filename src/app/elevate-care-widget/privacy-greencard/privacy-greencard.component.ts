import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import policy from '../../json-data/policy-development.json';
@Component({
  selector: 'app-privacy-greencard',
  imports: [CommonModule],
  templateUrl: './privacy-greencard.component.html',
  styleUrl: './privacy-greencard.component.scss',
})
export class PrivacyGreencardComponent {
  @Input({ required: true }) guidance: any;
}
