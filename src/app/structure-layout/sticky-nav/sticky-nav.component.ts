import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import menujson from '../../json-data/menu-json.json'
@Component({
  selector: 'app-sticky-nav',
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './sticky-nav.component.html',
  styleUrl: './sticky-nav.component.scss'
})
export class StickyNavComponent {
  isSticky: boolean = false;
  stickyTop: number = 0;

  ngOnInit() {
    const stickyElement = document.querySelector('.sticky') as HTMLElement;
    if (stickyElement) {
      this.stickyTop = stickyElement.offsetTop;
    }

    // setInterval(() => {
    //   this.isSticky = !this.isSticky
    // }, 5000);


  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY >= this.stickyTop) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }




  menu = menujson;
  isHoverDropDown = false;
}
