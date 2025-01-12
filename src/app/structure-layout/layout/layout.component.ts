import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../page/home/home.component';
import { ResponsiveNavbarComponent } from '../responsive-navbar/responsive-navbar.component';
import { TaskBarComponent } from '../task-bar/task-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { FabButtonComponent } from '../fab-button/fab-button.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, FabButtonComponent,
    ResponsiveNavbarComponent, TaskBarComponent, FooterComponent,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

 
}
