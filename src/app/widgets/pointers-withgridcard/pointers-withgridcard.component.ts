import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowcardGridComponent } from '../arrowcard-grid/arrowcard-grid.component';

@Component({
  selector: 'app-pointers-withgridcard',
  imports: [CommonModule, ArrowcardGridComponent],
  templateUrl: './pointers-withgridcard.component.html',
  styleUrl: './pointers-withgridcard.component.scss',
})
export class PointersWithgridcardComponent {
  @Input() dataProperty;
}
