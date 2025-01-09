import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-imagewithgrid',
  imports: [CommonModule],
  templateUrl: './large-imagewithgrid.component.html',
  styleUrl: './large-imagewithgrid.component.scss',
})
export class LargeImagewithgridComponent {
  @Input() dataProperty;
}
