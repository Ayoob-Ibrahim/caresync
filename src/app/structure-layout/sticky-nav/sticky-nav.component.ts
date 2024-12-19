import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import menujson from '../../json-data/menu-json.json'
@Component({
  selector: 'app-sticky-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './sticky-nav.component.html',
  styleUrl: './sticky-nav.component.scss'
})
export class StickyNavComponent implements OnInit {

  menu = menujson;
  isHoverDropDown = false;



  isSticky: boolean = false;
  stickyTop: number = 0;

  ngOnInit() {
    // const stickyElement = document.querySelector('.sticky') as HTMLElement;
    // if (stickyElement) {
    //   this.stickyTop = stickyElement.offsetTop;
    // }

  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('scroll events',window.scrollY >= this.stickyTop,this.stickyTop,window.scrollY)
    if (window.scrollY > this.stickyTop) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }


}
