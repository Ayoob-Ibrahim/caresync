import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-full-image-with-card-bottom',
  imports: [CommonModule],
  templateUrl: './full-image-with-card-bottom.component.html',
  styleUrl: './full-image-with-card-bottom.component.scss'
})
export class FullImageWithCardBottomComponent {

  @Input() dataProperty: any;





}
