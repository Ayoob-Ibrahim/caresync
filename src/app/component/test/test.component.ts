import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { menuDropDownAnimation } from '../../animation/common-animation';

@Component({
  selector: 'app-test',
  imports: [CommonModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: menuDropDownAnimation,
})
export class TestComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;

  }
}