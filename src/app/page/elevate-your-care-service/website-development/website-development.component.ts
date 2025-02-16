import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { InitailCardPanelComponent } from '../../../elevate-care-widget/initail-card-panel/initail-card-panel.component';
import { LiteBluePanelComponent } from '../../../elevate-care-widget/lite-blue-panel/lite-blue-panel.component';
import { CommonModule } from '@angular/common';
import { VerticalTabsComponent } from '../../../elevate-care-widget/vertical-tabs/vertical-tabs.component';
import { Router } from '@angular/router';
import { DynamicParaWithImageComponent } from '../../../widgets/dynamic-para-with-image/dynamic-para-with-image.component';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
import web_dev from '../../../json-data/website-development.json'
declare var $: any;

@Component({
  selector: 'app-website-development',
  imports: [InitailCardPanelComponent, LiteBluePanelComponent, CommonModule, VerticalTabsComponent, DynamicParaWithImageComponent,
    HorizontalCardComponent,
  ],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.scss'
})
export class WebsiteDevelopmentComponent {
  private router: Router = inject(Router)
  public website_dev = web_dev;


  visitWeb(url: string) {
    this.router.navigate([url]);
  }


  selecteData: any = signal(null);
  selectIndex(index, event) {
    if (index == this.selecteData()) {
      this.selecteData.set(null);
    } else {
      this.selecteData.set(index);
    }

  }


  @ViewChild('owlCarousel', { static: false }) owlCarousel!: ElementRef;
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
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
}
