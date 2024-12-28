import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { menuDropDownAnimation } from '../../animation/common-animation';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { CarouselItem } from '../../interface/common.interface';
import carousel_data from '../../json-data/home-entry-carousel.json'
import { interval, takeWhile } from 'rxjs';
SwiperCore.use([Navigation, Pagination, Thumbs]);
@Component({
  selector: 'app-test',
  imports: [CommonModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: menuDropDownAnimation,
})
export class TestComponent {
  private start: number = 4800;
  private end: number = 5000;
  private duration: number = 2000; // duration in milliseconds
  private frameRate: number = 60; // frames per second

  currentCount = signal<number>(this.start);

  constructor() {
    this.startCounting();
  }

  startCounting() {
    const totalFrames = (this.duration / 1000) * this.frameRate;
    const increment = (this.end - this.start) / totalFrames;
    let currentFrame = 0;

    const updateCount = () => {
      if (currentFrame < totalFrames) {
        this.currentCount.update(value => Math.floor(value + increment));
        currentFrame++;
        requestAnimationFrame(updateCount);
      } else {
        this.currentCount.set(this.end); // Ensure it ends exactly at the end value
      }
    };

    requestAnimationFrame(updateCount);
  }
}