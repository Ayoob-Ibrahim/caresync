import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { list_comp } from './packages-widgets-imports';
import { FullImageWithCardBottomComponent } from '../../widgets/full-image-with-card-bottom/full-image-with-card-bottom.component';
import { HttpService } from '../../service/http.service';
import { OurpackagesAccorianGroupComponent } from '../../component/ourpackages-accorian-group/ourpackages-accorian-group.component';
import { ImageCardDataComponent } from '../../widgets/image-card-data/image-card-data.component';
import { ThoroughSupportforCqcRegistrationComponent } from '../../widgets/thorough-supportfor-cqc-registration/thorough-supportfor-cqc-registration.component';
import { CyanWhiteCardComponent } from '../../widgets/cyan-white-card/cyan-white-card.component';
import { PointersWithgridcardComponent } from '../../widgets/pointers-withgridcard/pointers-withgridcard.component';
import { ArrowPointsAndBannerComponent } from '../../widgets/arrow-points-and-banner/arrow-points-and-banner.component';
import { RoundedArrowsContentComponent } from '../../widgets/rounded-arrows-content/rounded-arrows-content.component';
import { ThreeCardRowGridComponent } from '../../widgets/three-card-row-grid/three-card-row-grid.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages-menu',
  imports: [CommonModule],
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
        console.log(this.customInjector());
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.packageId.set(params.get('id'));
    });
  }
}
