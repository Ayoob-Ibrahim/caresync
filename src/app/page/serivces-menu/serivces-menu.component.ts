import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { ParentMenuDataHandler } from '../../baseclass/parent-menu-comp';

@Component({
  selector: 'app-serivces-menu',
  imports: [],
  templateUrl: './serivces-menu.component.html',
  styleUrl: './serivces-menu.component.scss'
})
export class SerivcesMenuComponent extends ParentMenuDataHandler {

  constructor() {
    super();
  }

  private serviceData = inject(HttpService);
  protected getData(): Record<string, any> {
    return this.serviceData.GetServiceData();
  }
}
