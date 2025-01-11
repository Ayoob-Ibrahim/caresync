import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-freequently-asked',
  imports: [],
  templateUrl: './freequently-asked.component.html',
  styleUrl: './freequently-asked.component.scss'
})
export class FreequentlyAskedComponent {
  @Input() dataProperty;
}
