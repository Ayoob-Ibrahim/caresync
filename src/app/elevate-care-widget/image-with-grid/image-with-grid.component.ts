import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-with-grid',
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './image-with-grid.component.html',
  styleUrl: './image-with-grid.component.scss',
})
export class ImageWithGridComponent {
  @Input() data;

  ngOnChanges() {}
  getClass(data: any) {
    return data;
  }

  basis = {
    'basis-[39%]': 'lg:basis-[39%] md:basis-[39%] basis-[98%]',
    'basis-[56%]': 'lg:basis-[56%] md:basis-[56%] basis-[98%]',
    'basis-[30%]': 'lg:basis-[30%] md:basis-[30%] basis-[98%]',
    'basis-[60%]': 'lg:basis-[60%] md:basis-[60%] basis-[98%]',
    'basis-[65%]': 'lg:basis-[65%] md:basis-[65%] basis-[98%]',
    'basis-[35%]': 'lg:basis-[35%] md:basis-[35%] basis-[98%]',
  };
}
