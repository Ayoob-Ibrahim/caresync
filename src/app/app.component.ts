import { Component, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { TweenMax } from 'gsap';
import { InfiniteCarouselComponent } from './component/infinite-carousel/infinite-carousel.component';
import { ResponsiveNavbarComponent } from './structure-layout/responsive-navbar/responsive-navbar.component';
import { HttpService } from './service/http.service';
import { WebServiceWorker } from './service/sw.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'caresync';

  $bigBall: HTMLElement;
  $smallBall: HTMLElement;
  $hoverables: NodeListOf<HTMLElement>;
  newAppUpdateAvailableSubscription: Subscription;
  isNewAppVersionAvailable: boolean = false;
  private router: Router = inject(Router);
  private webServiceWorker: WebServiceWorker = inject(WebServiceWorker)

  ngOnInit(): void {
  }

  checkIfAppUpdated() {
    this.newAppUpdateAvailableSubscription = this.webServiceWorker.$isAnyNewUpdateAvailable.subscribe((versionAvailableFlag: boolean) => {
      this.isNewAppVersionAvailable = versionAvailableFlag;
      console.info('chnages updated')
    });
  }

  ngOnDestroy() {
    this.newAppUpdateAvailableSubscription?.unsubscribe();
  }
}
