import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  HostListener,
  ElementRef,
  ViewChild,
  Renderer2,
  Input,
} from '@angular/core';
import infinite_carousel from '../../json-data/infinite-carousel.json';
declare var $: any;
@Component({
  selector: 'app-infinite-carousel',
  imports: [CommonModule],
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.scss',
})
export class InfiniteCarouselComponent implements AfterViewInit {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: ElementRef;
  @Input() carousel: string[];
  ngAfterViewInit(): void {
    $(this.owlCarousel.nativeElement).owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      smartSpeed: 1800,
      dots: false,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
}
