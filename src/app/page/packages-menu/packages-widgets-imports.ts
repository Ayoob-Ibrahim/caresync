import { CommonModule } from '@angular/common';
import { TiltComponent } from '../../component/tilt/tilt.component';
import { TwoCardWithImageComponent } from '../../widgets/two-card-with-image/two-card-with-image.component';
import { OurpackagesAccorianGroupComponent } from '../../component/ourpackages-accorian-group/ourpackages-accorian-group.component';
import { ArrowPointsAndBannerComponent } from '../../widgets/arrow-points-and-banner/arrow-points-and-banner.component';
import { CyanWhiteCardComponent } from '../../widgets/cyan-white-card/cyan-white-card.component';
import { FullImageWithCardBottomComponent } from '../../widgets/full-image-with-card-bottom/full-image-with-card-bottom.component';
import { ImageCardDataComponent } from '../../widgets/image-card-data/image-card-data.component';
import { PointersWithgridcardComponent } from '../../widgets/pointers-withgridcard/pointers-withgridcard.component';
import { RoundedArrowsContentComponent } from '../../widgets/rounded-arrows-content/rounded-arrows-content.component';
import { ThoroughSupportforCqcRegistrationComponent } from '../../widgets/thorough-supportfor-cqc-registration/thorough-supportfor-cqc-registration.component';
import { ThreeCardRowGridComponent } from '../../widgets/three-card-row-grid/three-card-row-grid.component';
// Export all components
export const list_comp = {
  DomiciliaryCare: [
    FullImageWithCardBottomComponent,
    ImageCardDataComponent,
    CyanWhiteCardComponent,
    OurpackagesAccorianGroupComponent,
    ThoroughSupportforCqcRegistrationComponent,
    PointersWithgridcardComponent,
    RoundedArrowsContentComponent,
    ArrowPointsAndBannerComponent,
    ImageCardDataComponent,
    ThreeCardRowGridComponent, ThreeCardRowGridComponent, TwoCardWithImageComponent, TwoCardWithImageComponent

  ],
  TemporaryStaffing: [FullImageWithCardBottomComponent],
  SupportedLiving: [FullImageWithCardBottomComponent],
  ciwDomiciliaryCare: [FullImageWithCardBottomComponent],
  rqiaDomiciliaryCare: [FullImageWithCardBottomComponent],
  CombinedCareAgency: [FullImageWithCardBottomComponent],
};
