import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thorough-supportfor-cqc-registration',
  imports: [CommonModule],
  templateUrl: './thorough-supportfor-cqc-registration.component.html',
  styleUrl: './thorough-supportfor-cqc-registration.component.scss',
})
export class ThoroughSupportforCqcRegistrationComponent {
  // aRR = [1, 2, 4, 4];
  // data =
  @Input() dataProperty;
}
