import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { InfiniteCarouselComponent } from '../../component/infinite-carousel/infinite-carousel.component';
declare var $: any;
@Component({
  selector: 'app-tender-fifth-part',
  imports: [CommonModule, InfiniteCarouselComponent],
  templateUrl: './tender-fifth-part.component.html',
  styleUrl: './tender-fifth-part.component.scss',
})
export class TenderFifthPartComponent extends BaseDataReciever {
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
  data = [
    '../../../assets/our-services/tender-1.jpg',
    '../../../assets/our-services/tender-2.png',
    '../../../assets/our-services/tender-3.png',
    '../../../assets/our-services/tender-4.jpg',
    '../../../assets/our-services/tender-5.png',
    '../../../assets/our-services/tender-6.png',
  ];
}
