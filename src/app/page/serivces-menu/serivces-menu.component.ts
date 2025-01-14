import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { list_comp } from '../packages-menu/packages-widgets-imports';

@Component({
  selector: 'app-serivces-menu',
  imports: [],
  templateUrl: './serivces-menu.component.html',
  styleUrl: './serivces-menu.component.scss'
})
export class SerivcesMenuComponent implements OnInit {
  packageId = signal<string | null>(null);
  customInjector = signal<any>({});

  componentList = list_comp;

  private serviceData = inject(HttpService);
  private route = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      const id = this.packageId();
      if (id) {
        const data = this.serviceData.GetPackagesData()[id];
        this.customInjector.set(data);
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.packageId.set(params.get('id'));
      console.log(this.packageId)
    });
  }
}

