import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import carousel_data from '../../json-data/home-entry-carousel.json';
import { CarouselItem } from '../../interface/common.interface';
@Component({
  selector: 'app-home-page-entry-carousel',
  imports: [CommonModule],
  templateUrl: './home-page-entry-carousel.component.html',
  styleUrl: './home-page-entry-carousel.component.scss',
})
export class HomePageEntryCarouselComponent implements OnInit, AfterViewInit {
  data: CarouselItem[] = carousel_data;
  private start: number = 300;
  private end: number = 500;
  private duration: number = 2000;
  private frameRate: number = 60;
  currentCount = signal<number>(this.start);
  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.startCounting();
  }

  startCounting() {
    const totalFrames = (this.duration / 1000) * this.frameRate;
    const increment = (this.end - this.start) / totalFrames;
    let currentFrame = 0;

    const updateCount = () => {
      if (currentFrame < totalFrames) {
        this.currentCount.update((value) => Math.floor(value + increment));
        currentFrame++;
        requestAnimationFrame(updateCount);
      } else {
        this.currentCount.set(this.end);
      }
    };

    requestAnimationFrame(updateCount);
  }

  ngAfterViewInit() {
    // new Swiper('.swiper-container', {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    //   effect: 'fade',
    //   speed: 800,
    //   loop: true,
    //   grabCursor: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   touchRatio: 1,
    // });
    // this.cdRef.detectChanges();
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
