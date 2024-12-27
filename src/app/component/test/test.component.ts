import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { menuDropDownAnimation } from '../../animation/common-animation';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { CarouselItem } from '../../interface/common.interface';
import carousel_data from '../../json-data/home-entry-carousel.json'
SwiperCore.use([Navigation, Pagination, Thumbs]);
@Component({
  selector: 'app-test',
  imports: [CommonModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: menuDropDownAnimation,
})
export class TestComponent implements AfterViewInit {
  data: CarouselItem[] = carousel_data;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, // Enable infinite loop
      effect: 'fade',  // Apply fade transition effect
      speed: 800,      // Set transition speed (in ms)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Trigger change detection manually after Swiper setup
    this.cdRef.detectChanges();
  }
}