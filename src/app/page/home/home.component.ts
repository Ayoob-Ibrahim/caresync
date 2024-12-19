import { Component, HostListener } from '@angular/core';
import { ServicesComponent } from '../../component/services/services.component';
import { TestComponent } from '../../component/test/test.component';
import { ImageselecterpartComponent } from '../../component/imageselecterpart/imageselecterpart.component';

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, ImageselecterpartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

}
