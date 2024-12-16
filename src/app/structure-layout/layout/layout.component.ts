import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { StickyNavComponent } from '../sticky-nav/sticky-nav.component';
import { HomeComponent } from '../../page/home/home.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, StickyNavComponent,NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


}
