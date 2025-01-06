import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrowcard-grid',
  imports: [CommonModule],
  templateUrl: './arrowcard-grid.component.html',
  styleUrl: './arrowcard-grid.component.scss',
})
export class ArrowcardGridComponent {
  @Input() dataProperty;
}
