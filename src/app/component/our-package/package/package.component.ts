import { Component, OnInit } from '@angular/core';
import { PackageCardComponent } from '../package-card/package-card.component';
import { CommonModule } from '@angular/common';
import { CarePackage, PackageInfo } from '../../../interface/common.interface';
import packageJson from '../../../json-data/package-card.json'
import { SvgComponent } from '../../svg/svg.component';
import portrait_image from '../../../json-data/portrait-carousel.json'
@Component({
  selector: 'app-package',
  imports: [PackageCardComponent, CommonModule, SvgComponent],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent implements OnInit {
  list_package: PackageInfo[] = packageJson
  imageUrls: CarePackage[] = portrait_image;

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.imageUrls.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

  currentSlideIndex: number = 0;

  constructor() { }
  
  ngOnInit(){
    setInterval(()=>{
      this.nextSlide()
    },5000)
  }
}
