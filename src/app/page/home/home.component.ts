import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { TestComponent } from '../../component/test/test.component';
import { ImageselecterpartComponent } from '../../component/imageselecterpart/imageselecterpart.component';
import { ServicesComponent } from '../../component/our-service/service/services.component';
import { PackageComponent } from '../../component/our-package/package/package.component';
import { GrowingMarketComponent } from '../../component/growing-market/growing-market.component';
import { HomePageEntryCarouselComponent } from '../../component/home-page-entry-carousel/home-page-entry-carousel.component';
import { GrowCareBuisnessComponent } from '../../component/grow-care-buisness/grow-care-buisness.component';
import { ImageCarouselComponent } from '../../component/image-carousel/image-carousel.component';
import { InfiniteCarouselComponent } from '../../component/infinite-carousel/infinite-carousel.component';
import { FooterComponent } from '../../component/footer/footer.component';
import infinite_carousel from '../../json-data/infinite-carousel.json';
import { WindowScroller } from '../../baseclass/scroll-upper';
@Component({
  selector: 'app-home',
  imports: [
    ServicesComponent,
    ImageselecterpartComponent,
    PackageComponent,
    GrowingMarketComponent,
    HomePageEntryCarouselComponent,
    GrowCareBuisnessComponent,
    ImageCarouselComponent,
    InfiniteCarouselComponent,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends WindowScroller {
  data = infinite_carousel;
}
