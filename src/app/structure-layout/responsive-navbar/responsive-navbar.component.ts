import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import menujson from '../../json-data/menu-json.json'
 
@Component({
  selector: 'app-responsive-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './responsive-navbar.component.html',
  styleUrl: './responsive-navbar.component.scss'
})
export class ResponsiveNavbarComponent {

  @ViewChild('stickyElement') stickyElement!: ElementRef<HTMLElement>;
  menu = menujson;
  isHoverDropDown = false;



  isSticky: boolean = false;
  stickyTop: number = 0;

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isSticky = window.scrollY > this.stickyTop;
  }

}
