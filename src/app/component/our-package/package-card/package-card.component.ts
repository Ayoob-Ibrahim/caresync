import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-card',
  imports: [CommonModule],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss'
})
export class PackageCardComponent {
  @Input() height: string = '250px';
}
