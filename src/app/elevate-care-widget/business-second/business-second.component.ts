import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-second',
  imports: [CommonModule],
  templateUrl: './business-second.component.html',
  styleUrl: './business-second.component.scss',
})
export class BusinessSecondComponent {
  @Input() data;
}
