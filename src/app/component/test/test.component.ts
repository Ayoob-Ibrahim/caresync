import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../structure-layout/navbar/navbar.component';
import menujson from '../../json-data/menu-json.json'
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../page/home/home.component';
import { PackageComponent } from '../our-package/package/package.component';
import { InfiniteCarouselComponent } from '../infinite-carousel/infinite-carousel.component';
@Component({
  selector: 'app-test',
  imports: [CommonModule, PackageComponent,InfiniteCarouselComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}