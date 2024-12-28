import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import carousel_data from '../../json-data/home-entry-carousel.json';
import { CarouselItem } from '../../interface/common.interface';
@Component({
  selector: 'app-home-page-entry-carousel',
  imports: [CommonModule],
  templateUrl: './home-page-entry-carousel.component.html',
  styleUrl: './home-page-entry-carousel.component.scss',
})
export class HomePageEntryCarouselComponent {
  data: CarouselItem[] = carousel_data;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      speed: 800,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      touchRatio: 1,
    });
    this.cdRef.detectChanges();
    new Swiper('.swiper-container', {
      modules: [Autoplay, Navigation, Pagination, EffectFade],
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      speed: 800,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      touchRatio: 1,
    });
    this.cdRef.detectChanges();
  }
}
