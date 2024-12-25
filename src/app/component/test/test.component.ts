import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { menuDropDownAnimation } from '../../animation/common-animation';
import { HomePageEntryCarouselComponent } from '../home-page-entry-carousel/home-page-entry-carousel.component';
import Swiper from 'swiper';

@Component({
  selector: 'app-test',
  imports: [CommonModule, HomePageEntryCarouselComponent,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: menuDropDownAnimation,
})
export class TestComponent {
  images = [
    'https://via.placeholder.com/800x300?text=Slide+1',
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
  ];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
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