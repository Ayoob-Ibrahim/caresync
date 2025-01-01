import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { AccordianComponent } from '../accordian/accordian.component';

@Component({
  selector: 'app-ourpackages-accorian-group',
  imports: [CommonModule, AccordianComponent],
  templateUrl: './ourpackages-accorian-group.component.html',
  styleUrl: './ourpackages-accorian-group.component.scss',
})
export class OurpackagesAccorianGroupComponent {
  selectedIndex = signal(null);
  @Input() dataProperty: any;
}
