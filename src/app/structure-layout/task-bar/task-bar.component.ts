import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SvgComponent } from '../../component/svg/svg.component';
import taskbar from '../../json-data/task-bar.json'
import { MenuItem } from '../../interface/common.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-bar',
  imports: [SvgComponent, CommonModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss'
})
export class TaskBarComponent {
  menuItems: MenuItem[] = taskbar
  isMobile: boolean = false;

  constructor() {
    this.checkIfMobile(window.innerWidth);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile(event.target.innerWidth);
  }


  checkIfMobile(width: number) {
    this.isMobile = width < 1280;
  }


  @ViewChild('mySidenav') sidenav: ElementRef | undefined;

  toggleNav() {
    if (this.sidenav) {
      const currentWidth = this.sidenav.nativeElement.style.width;
      this.sidenav.nativeElement.style.width = currentWidth === '100%' ? '0' : '100%';
    }
  }
}
