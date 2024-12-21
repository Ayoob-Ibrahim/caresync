import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-infinite-carousel',
  imports: [CommonModule],
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.scss'
})
export class InfiniteCarouselComponent   implements AfterViewInit, OnDestroy {
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  @ViewChild('menuWrapper', { static: false }) menuWrapper!: ElementRef;

  items = [
    { image: 'image1.jpg', title: 'Image 1' },
    { image: 'image2.jpg', title: 'Image 2' },
    { image: 'image3.jpg', title: 'Image 3' },
    // Add more items here
  ];

  private menuWidth: number = 0;
  private itemWidth: number = 0;
  private wrapWidth: number = 0;

  private scrollY: number = 0;
  private oldScrollY: number = 0;
  private y: number = 0;

  private isDragging: boolean = false;
  private touchStart: number = 0;
  private touchX: number = 0;

  private scrollSpeed: number = 0;

  private mouseWheelListener: () => void;
  private touchStartListener: () => void;
  private touchMoveListener: () => void;
  private touchEndListener: () => void;
  private mouseDownListener: () => void;
  private mouseMoveListener: () => void;
  private mouseUpListener: () => void;
  private mouseLeaveListener: () => void;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.menuWidth = this.menu.nativeElement.clientWidth;
    this.itemWidth = this.menuWrapper.nativeElement.children[0].clientWidth;
    this.wrapWidth = this.items.length * this.itemWidth;

    this.dispose(0);
    this.addEventListeners();
    this.render();
  }

  ngOnDestroy() {
    this.removeEventListeners();
  }

  private lerp(v0: number, v1: number, t: number): number {
    return v0 * (1 - t) + v1 * t;
  }

  private dispose(scroll: number): void {
    gsap.set(this.menuWrapper.nativeElement.children, {
      x: (i: number) => i * this.itemWidth + scroll,
      modifiers: {
        x: (x: any) => {
          const s = gsap.utils.wrap(-this.itemWidth, this.wrapWidth - this.itemWidth, parseInt(x));
          return `${s}px`;
        }
      }
    });
  }

  private handleMouseWheel(e: WheelEvent): void {
    this.scrollY -= e.deltaY * 0.9;
  }

  private handleTouchStart(e: TouchEvent | MouseEvent): void {
    this.touchStart = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
    this.isDragging = true;
    this.renderer.addClass(this.menu.nativeElement, 'is-dragging');
  }

  private handleTouchMove(e: TouchEvent | MouseEvent): void {
    if (!this.isDragging) return;

    this.touchX = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
    this.scrollY += (this.touchX - this.touchStart) * 2.5;
    this.touchStart = this.touchX;
  }

  private handleTouchEnd(): void {
    this.isDragging = false;
    this.renderer.removeClass(this.menu.nativeElement, 'is-dragging');
  }

  private addEventListeners(): void {
    this.mouseWheelListener = this.renderer.listen(this.menu.nativeElement, 'wheel', (e) => this.handleMouseWheel(e));
    this.touchStartListener = this.renderer.listen(this.menu.nativeElement, 'touchstart', (e) => this.handleTouchStart(e));
    this.touchMoveListener = this.renderer.listen(this.menu.nativeElement, 'touchmove', (e) => this.handleTouchMove(e));
    this.touchEndListener = this.renderer.listen(this.menu.nativeElement, 'touchend', () => this.handleTouchEnd());
    this.mouseDownListener = this.renderer.listen(this.menu.nativeElement, 'mousedown', (e) => this.handleTouchStart(e));
    this.mouseMoveListener = this.renderer.listen(this.menu.nativeElement, 'mousemove', (e) => this.handleTouchMove(e));
    this.mouseUpListener = this.renderer.listen(this.menu.nativeElement, 'mouseup', () => this.handleTouchEnd());
    this.mouseLeaveListener = this.renderer.listen(this.menu.nativeElement, 'mouseleave', () => this.handleTouchEnd());
  }

  private removeEventListeners(): void {
    if (this.mouseWheelListener) this.mouseWheelListener();
    if (this.touchStartListener) this.touchStartListener();
    if (this.touchMoveListener) this.touchMoveListener();
    if (this.touchEndListener) this.touchEndListener();
    if (this.mouseDownListener) this.mouseDownListener();
    if (this.mouseMoveListener) this.mouseMoveListener();
    if (this.mouseUpListener) this.mouseUpListener();
    if (this.mouseLeaveListener) this.mouseLeaveListener();
  }

  private render(): void {
    requestAnimationFrame(() => this.render());
    this.y = this.lerp(this.y, this.scrollY, 0.1);
    this.dispose(this.y);

    this.scrollSpeed = this.y - this.oldScrollY;
    this.oldScrollY = this.y;

    gsap.to(this.menuWrapper.nativeElement.children, {
      skewX: -this.scrollSpeed * 0.2,
      rotate: this.scrollSpeed * 0.01,
      scale: 1 - Math.min(100, Math.abs(this.scrollSpeed)) * 0.003
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.menuWidth = this.menu.nativeElement.clientWidth;
    this.itemWidth = this.menuWrapper.nativeElement.children[0].clientWidth;
    this.wrapWidth = this.items.length * this.itemWidth;
  }
}