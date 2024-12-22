import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import menujson from '../../json-data/menu-json.json'
export const menu = [
  { label: 'DashBoard', url: "/dashboard", icon: 'bi bi-house-check-fill' },
  { label: 'GridView', url: "/gridview", icon: 'bi bi-grid-3x3-gap' },
  { label: 'TrackRecord', url: "/trackhistory", icon: 'bi bi-clock-history' },
  { label: 'MapView', url: "/mapview", icon: 'bi bi-map-fill' },
  { label: 'Warning', url: "/alerts", icon: 'bi bi-exclamation-triangle-fill' },
  { label: 'logOut', url: "/login", icon: 'bi bi-box-arrow-right' },

]
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
