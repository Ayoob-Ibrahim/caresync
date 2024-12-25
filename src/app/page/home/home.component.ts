import { Component, HostListener } from '@angular/core';
import { TestComponent } from '../../component/test/test.component';
import { ImageselecterpartComponent } from '../../component/imageselecterpart/imageselecterpart.component';
import { ServicesComponent } from '../../component/our-service/service/services.component';
import { PackageComponent } from '../../component/our-package/package/package.component';
import { GrowingMarketComponent } from '../../component/growing-market/growing-market.component';
import { HomePageEntryCarouselComponent } from '../../component/home-page-entry-carousel/home-page-entry-carousel.component';
import { GrowCareBuisnessComponent } from '../../component/grow-care-buisness/grow-care-buisness.component';
@Component({
  selector: 'app-home',
  imports: [
    ServicesComponent,
    ImageselecterpartComponent,
    PackageComponent,
    GrowingMarketComponent,
    TestComponent,
    HomePageEntryCarouselComponent,
    GrowCareBuisnessComponent
  ],



  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
