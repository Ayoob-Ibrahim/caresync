import { Component, HostListener } from '@angular/core';
import { TestComponent } from '../../component/test/test.component';
import { ImageselecterpartComponent } from '../../component/imageselecterpart/imageselecterpart.component';
import { ServicesComponent } from '../../component/our-service/service/services.component';
import { PackageComponent } from '../../component/our-package/package/package.component';
@Component({
  selector: 'app-home',
  imports: [ServicesComponent, ImageselecterpartComponent,  PackageComponent],



  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
