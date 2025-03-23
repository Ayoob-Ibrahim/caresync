import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videos-init',
  imports: [CommonModule],
  templateUrl: './videos-init.component.html',
  styleUrl: './videos-init.component.scss',
})
export class VideosInitComponent {
  @Input() data;
}
