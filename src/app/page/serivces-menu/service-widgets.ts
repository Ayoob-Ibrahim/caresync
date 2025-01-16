import { ListVerticalCardsInServiceComponent } from "../../service-widgets/list-vertical-cards-in-service/list-vertical-cards-in-service.component";
import { ServiceInitialPageWithImageComponent } from "../../service-widgets/service-initial-page-with-image/service-initial-page-with-image.component";
import { ThreeRowContentComponent } from "../../service-widgets/three-row-content/three-row-content.component";
import { FreequentlyAskedComponent } from "../../widgets/freequently-asked/freequently-asked.component";
import { HorizontalCardComponent } from "../../widgets/horizontal-card/horizontal-card.component";

export const list_service_comp = {
    'business-setup': [
        ServiceInitialPageWithImageComponent,
        ListVerticalCardsInServiceComponent,
        ThreeRowContentComponent,
        FreequentlyAskedComponent,
        HorizontalCardComponent
    ]
}