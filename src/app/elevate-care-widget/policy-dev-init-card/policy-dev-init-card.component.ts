import { Component, Input, signal } from '@angular/core';
import policy from '../../json-data/policy-development.json';

@Component({
  selector: 'app-policy-dev-init-card',
  imports: [],
  templateUrl: './policy-dev-init-card.component.html',
  styleUrl: './policy-dev-init-card.component.scss',
})
export class PolicyDevInitCardComponent {
  @Input({ required: true }) guidance: any;

  selecteData: any = signal(null);
  selectIndex(index, event) {
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }
  }
}
