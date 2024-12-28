import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { TweenMax } from 'gsap';
import { InfiniteCarouselComponent } from './component/infinite-carousel/infinite-carousel.component';
import { ResponsiveNavbarComponent } from './structure-layout/responsive-navbar/responsive-navbar.component';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'caresync';

  $bigBall: HTMLElement;
  $smallBall: HTMLElement;
  $hoverables: NodeListOf<HTMLElement>;
  private data_service: HttpService = inject(HttpService)
  ngOnInit(): void {

    this.data_service.setpackagesJson();
    // this.$bigBall = document.querySelector('.cursor__ball--big') as HTMLElement;
    // this.$smallBall = document.querySelector('.cursor__ball--small') as HTMLElement;
    // this.$hoverables = document.querySelectorAll('.hoverable');

    // this.addEventListeners();
  }

  // Listeners for mouse move and hover events
  // addEventListeners(): void {
  //   document.body.addEventListener('mousemove', this.onMouseMove.bind(this));
  //   this.$hoverables.forEach(element => {
  //     element.addEventListener('mouseenter', this.onMouseHover.bind(this));
  //     element.addEventListener('mouseleave', this.onMouseHoverOut.bind(this));
  //   });
  // }

  // // Move the cursor
  // onMouseMove(e: MouseEvent): void {
  //   TweenMax.to(this.$bigBall, 0.4, {
  //     x: e.pageX - 15,
  //     y: e.pageY - 15
  //   });
  //   TweenMax.to(this.$smallBall, 0.1, {
  //     x: e.pageX - 5,
  //     y: e.pageY - 7
  //   });
  // }

  // // Hover an element
  // onMouseHover(): void {
  //   TweenMax.to(this.$bigBall, 0.3, {
  //     scale: 4
  //   });
  // }

  // // Hover out of an element
  // onMouseHoverOut(): void {
  //   TweenMax.to(this.$bigBall, 0.3, {
  //     scale: 1
  //   });
  // }

}
