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
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isSticky = window.scrollY > this.stickyTop;
  }


}
