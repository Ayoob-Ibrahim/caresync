import { Component, Input } from '@angular/core';
import { ArrowcardGridComponent } from '../arrowcard-grid/arrowcard-grid.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rounded-arrows-content',
  imports: [ArrowcardGridComponent, CommonModule],
  templateUrl: './rounded-arrows-content.component.html',
  styleUrl: './rounded-arrows-content.component.scss',
})
export class RoundedArrowsContentComponent {
  @Input() dataProperty;
}
