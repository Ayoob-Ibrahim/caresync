import { Component, computed, effect, inject, OnInit, signal, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { list_comp } from './packages-widgets-imports';
import { HttpService } from '../../service/http.service';
import { CommonModule } from '@angular/common';
import { ParentMenuDataHandler } from '../../baseclass/parent-menu-comp';




@Component({
  selector: 'app-packages-menu',
  imports: [CommonModule,],
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.scss',
})
export class PackagesMenuComponent extends ParentMenuDataHandler {
  componentList = list_comp;
  constructor() {
    super();
  }

  private serviceData = inject(HttpService);
  protected getData(): Record<string, any> {
    return this.serviceData.GetPackagesData();
  }
}
