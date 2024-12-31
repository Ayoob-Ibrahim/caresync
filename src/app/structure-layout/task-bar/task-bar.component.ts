import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { SvgComponent } from '../../component/svg/svg.component';
import taskbar from '../../json-data/task-bar.json';
import { MenuItem } from '../../interface/common.interface';
import { CommonModule } from '@angular/common';
import mainMenu from '../../json-data/menu-json.json';
import { menuDropDownAnimation } from '../../animation/common-animation';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-task-bar',
  imports: [SvgComponent, CommonModule, RouterModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss',
  animations: menuDropDownAnimation,
})
export class TaskBarComponent {
  menuItems: MenuItem[] = taskbar;
  isMobile: boolean = false;
  menu = signal(mainMenu);
  private router: Router = inject(Router)
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
      this.sidenav.nativeElement.style.width =
        currentWidth === '100%' ? '0' : '100%';
    }
  }

  collapse(index: number) {
    const currentMenu = this.menu();
    currentMenu[index].collapse = !currentMenu[index].collapse;
    this.menu.set(currentMenu);
  }

  menuChanger(data) {
    this.router.navigate(['/packages', data.url]);
  }
}
