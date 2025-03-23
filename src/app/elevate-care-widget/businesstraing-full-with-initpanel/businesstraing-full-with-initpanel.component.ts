import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-businesstraing-full-with-initpanel',
  imports: [CommonModule],
  templateUrl: './businesstraing-full-with-initpanel.component.html',
  styleUrl: './businesstraing-full-with-initpanel.component.scss',
})
export class BusinesstraingFullWithInitpanelComponent {
  @Input() data;
}
