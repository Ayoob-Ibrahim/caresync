import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideosInitComponent } from '../../../resources-widget/videos-init/videos-init.component';
import { VideoGridComponent } from '../../../resources-widget/video-grid/video-grid.component';
import videos from '../../../json-data/videos.json';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
@Component({
  selector: 'app-videos',
  imports: [
    CommonModule,
    VideosInitComponent,
    VideoGridComponent,
    HorizontalCardComponent,
  ],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  data = videos;
}
