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
   
}