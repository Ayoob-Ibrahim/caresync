import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('stickyElement') stickyElement!: ElementRef<HTMLElement>;
  menu = menujson;
  isHoverDropDown = false;



  isSticky: boolean = false;
  stickyTop: number = 0;

  ngOnInit() {
    if (this.stickyElement) {
      this.stickyTop = this.stickyElement.nativeElement.offsetTop;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('scroll events', window.scrollY >= this.stickyTop, this.stickyTop, window.scrollY)
    this.isSticky = window.scrollY > this.stickyTop;
  }


}
