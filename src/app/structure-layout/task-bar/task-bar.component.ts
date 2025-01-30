import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { SvgComponent } from '../../component/svg/svg.component';
import taskbar from '../../json-data/task-bar.json';
import { MenuItem } from '../../interface/common.interface';
import { CommonModule } from '@angular/common';
import mainMenu from '../../json-data/menu-json.json';
import { menuDropDownAnimation } from '../../animation/common-animation';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-task-bar',
  imports: [SvgComponent, CommonModule, RouterModule],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss',
  animations: menuDropDownAnimation,
})
export class TaskBarComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = taskbar;
  isMobile: boolean = false;
  menu = signal(mainMenu);
  isOpened: boolean;
  private router: Router = inject(Router);
  child: string = ''
  constructor(private activatedRoute: ActivatedRoute) {
    this.checkIfMobile(window.innerWidth);
  }

  private routeSub!: Subscription;
  ngOnInit(): void {
    this.child = this.router.url.split('/')[2]
  }

  ngOnDestroy() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile(event.target.innerWidth);
  }

  checkIfMobile(width: number) {
    this.isMobile = width < 1280;
  }

  @ViewChild('mySidenav') sidenav: ElementRef | undefined;

  toggleNav(parent?) {
    if (this.sidenav) {
      const currentWidth = this.sidenav.nativeElement.style.width;
      this.sidenav.nativeElement.style.width =
        currentWidth === '100%' ? '0' : '100%';
      this.isOpened = currentWidth != '100%';
      if (!this.isOpened) {
        this.menu().map((value, index) => {
          if (value.hasOwnProperty('collapse') ? value.collapse : false) {
            this.menu()[index].collapse = false
          }
        })
      }
    }
    if (parent) this.child = ''
  }

  collapse(index: number) {
    const currentMenu = this.menu();
    currentMenu[index].collapse = !currentMenu[index].collapse;
    this.menu.set(currentMenu);

  }

  menuChanger(data, parentData) {
    let { parent } = parentData;
    this.router.navigate([parent, data.url]);
    this.child = data.url;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.toggleNav();
    }, 400);
  }


}
