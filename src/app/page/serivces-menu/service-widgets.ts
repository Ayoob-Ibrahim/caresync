import { ListVerticalCardsInServiceComponent } from '../../service-widgets/list-vertical-cards-in-service/list-vertical-cards-in-service.component';
import { ServiceInitialPageWithImageComponent } from '../../service-widgets/service-initial-page-with-image/service-initial-page-with-image.component';
import { ThreeRowContentComponent } from '../../service-widgets/three-row-content/three-row-content.component';
import { BgArrowUpComponent } from '../../widgets/bg-arrow-up/bg-arrow-up.component';
import { ClientCardComponent } from '../../widgets/client-card/client-card.component';
import { DynamicParaWithImageComponent } from '../../widgets/dynamic-para-with-image/dynamic-para-with-image.component';
import { FreequentlyAskedComponent } from '../../widgets/freequently-asked/freequently-asked.component';
import { HorizontalCardComponent } from '../../widgets/horizontal-card/horizontal-card.component';
import { StepCardComponent } from '../../widgets/step-card/step-card.component';

export const list_service_comp = {
  'cqc-registration': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ListVerticalCardsInServiceComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'marketing-support': [
    BgArrowUpComponent,
    StepCardComponent,
    ListVerticalCardsInServiceComponent,
    ClientCardComponent,
    ThreeRowContentComponent,
    FreequentlyAskedComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'comprehensive-training': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ListVerticalCardsInServiceComponent,
    ThreeRowContentComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'tender-writing': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ListVerticalCardsInServiceComponent,
    ThreeRowContentComponent,
    ClientCardComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'ofsted-related-services': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ListVerticalCardsInServiceComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'pir-writing': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ListVerticalCardsInServiceComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'compliance-management': [
    BgArrowUpComponent,
    DynamicParaWithImageComponent,
    ThreeRowContentComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'business-setup': [
    ServiceInitialPageWithImageComponent,
    ListVerticalCardsInServiceComponent,
    ThreeRowContentComponent,
    FreequentlyAskedComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  'client-acquisition': [
    ServiceInitialPageWithImageComponent,
    ListVerticalCardsInServiceComponent,
    ThreeRowContentComponent,
    FreequentlyAskedComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
  branding: [
    ServiceInitialPageWithImageComponent,
    ListVerticalCardsInServiceComponent,
    ThreeRowContentComponent,
    FreequentlyAskedComponent,
    HorizontalCardComponent,
    HorizontalCardComponent,
  ],
};
