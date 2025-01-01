import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SHARED_WIDGETS_PACKAGE } from './packages-widgets-imports';
import { FullImageWithCardBottomComponent } from '../../widgets/full-image-with-card-bottom/full-image-with-card-bottom.component';
import { HttpService } from '../../service/http.service';
import { OurpackagesAccorianGroupComponent } from '../../component/ourpackages-accorian-group/ourpackages-accorian-group.component';

@Component({
  selector: 'app-packages-menu',
  imports: SHARED_WIDGETS_PACKAGE,
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.scss',
})
export class PackagesMenuComponent implements OnInit {
  packageId = signal<string | null>(null);
  customInjector = signal<any>({});

  componentList = {
    DomiciliaryCare: [
      FullImageWithCardBottomComponent,
      OurpackagesAccorianGroupComponent,
    ],
    TemporaryStaffing: [FullImageWithCardBottomComponent],
    SupportedLiving: [FullImageWithCardBottomComponent],
    ciwDomiciliaryCare: [FullImageWithCardBottomComponent],
    rqiaDomiciliaryCare: [FullImageWithCardBottomComponent],
    CombinedCareAgency: [FullImageWithCardBottomComponent],
  };

  private serviceData = inject(HttpService);
  private route = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      const id = this.packageId();
      if (id) {
        const data = this.serviceData.GetPackagesData()[id];
        this.customInjector.set(data);
        console.log(data);
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.packageId.set(params.get('id'));
    });
  }
}
