import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import carosuel_data from "../../json-data/card-image-carousel.json"
import { Testimonial } from '../../interface/common.interface';
import { FormsModule } from '@angular/forms';
import { SvgComponent } from '../svg/svg.component';
declare var $: any;

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule, FormsModule, SvgComponent],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {
  testimonials: Testimonial[] = carosuel_data.testimonials
  selectedPosition: string = 'pos1'
  constructor() {
    console.log(this.testimonials)
  }

  move(inc: boolean, data) {

    data = Number(data.split('pos')[1])
    if (
      (data == 1 && !inc) ||
      (data == this.testimonials.length && inc)
    ) {
      data = inc ? 1 : this.testimonials.length;
      this.selectedPosition = 'pos' + (data);
      return;
    }
    this.selectedPosition = inc ? 'pos' + (data + 1) : 'pos' + (data - 1);

  }


}