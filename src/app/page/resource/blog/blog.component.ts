import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoGridComponent } from '../../../resources-widget/video-grid/video-grid.component';
import { VideosInitComponent } from '../../../resources-widget/videos-init/videos-init.component';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
import blog from '../../../json-data/blog.json';
@Component({
  selector: 'app-blog',
  imports: [
    CommonModule,
    VideosInitComponent,
    VideoGridComponent,
    HorizontalCardComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  data = blog;
}
