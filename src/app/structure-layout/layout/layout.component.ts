import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../page/home/home.component';
import { ResponsiveNavbarComponent } from '../responsive-navbar/responsive-navbar.component';
import { TaskBarComponent } from '../task-bar/task-bar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule,
    ResponsiveNavbarComponent, TaskBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


}
