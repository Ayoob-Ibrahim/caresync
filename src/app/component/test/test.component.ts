import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../structure-layout/navbar/navbar.component';
import menujson from '../../json-data/menu-json.json'
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../page/home/home.component';
@Component({
  selector: 'app-test',
  imports: [CommonModule, NavbarComponent, RouterModule, HomeComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
 
}
