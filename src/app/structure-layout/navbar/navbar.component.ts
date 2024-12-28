import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import menujson from '../../json-data/menu-json.json'
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route: Router) {

  }

  ngOnInit() {
   
  }
  menu = menujson;
  isHoverDropDown = false;


  

}
