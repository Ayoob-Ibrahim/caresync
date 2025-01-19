import { AfterViewInit, Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { ParentMenuDataHandler } from '../../baseclass/parent-menu-comp';
import { CommonModule } from '@angular/common';
import { list_service_comp } from './service-widgets';

@Component({
  selector: 'app-serivces-menu',
  imports: [CommonModule],
  templateUrl: './serivces-menu.component.html',
  styleUrl: './serivces-menu.component.scss'
})
export class SerivcesMenuComponent extends ParentMenuDataHandler implements AfterViewInit {
  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  componentList = list_service_comp;
  constructor() {
    super();
  }

  private serviceData = inject(HttpService);
  protected getData(): Record<string, any> {
    return this.serviceData.GetServiceData();
  }
}
