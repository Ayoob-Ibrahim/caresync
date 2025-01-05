import { CommonModule } from '@angular/common';
import { FullImageWithCardBottomComponent } from '../../widgets/full-image-with-card-bottom/full-image-with-card-bottom.component';
import { ImageCardDataComponent } from '../../widgets/image-card-data/image-card-data.component';
import { CyanWhiteCardComponent } from '../../widgets/cyan-white-card/cyan-white-card.component';

// Export all components
export const SHARED_WIDGETS_PACKAGE = [
  FullImageWithCardBottomComponent,
  ImageCardDataComponent,
  CommonModule,
  CyanWhiteCardComponent
];
