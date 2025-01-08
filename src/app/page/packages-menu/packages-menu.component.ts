import { Component, computed, effect, inject, OnInit, signal, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { list_comp } from './packages-widgets-imports';
import { HttpService } from '../../service/http.service';
import { CommonModule } from '@angular/common';
import { TiltComponent } from '../../component/tilt/tilt.component';
import { TwoCardWithImageComponent } from '../../widgets/two-card-with-image/two-card-with-image.component';

@Component({
  selector: 'app-packages-menu',
  imports: [CommonModule,],
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.scss',
})
export class PackagesMenuComponent implements OnInit {
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
    });
  }
}
