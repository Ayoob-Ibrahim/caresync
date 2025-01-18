import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteCarouselComponent } from '../../component/infinite-carousel/infinite-carousel.component';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, InfiniteCarouselComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  public coreValues = [
    {
      width: '35%',
      title: 'Professionalism',
      content: 'Our services are delivered with the level of professionalism ensuring expert attention and care to every detail.'
    },
    {
      width: '28%',
      title: 'Integrity',
      content: 'We conduct our operations with transparency, honesty and always keeping our clients best interests in mind.'
    },
    {
      width: '35%',
      title: 'Innovation',
      content: 'We embrace methods and technologies to drive the success of our clients forward.'
    },
    {
      width: '30%',
      title: 'Collaboration',
      content: 'We forge partnerships to effectively address the needs of our clients.'
    },
    {
      width: '38%',
      title: 'Empowerment',
      content: 'We provide our clients with the tools and knowledge they need to manage their businesses.'
    },
    {
      width: '30%',
      title: 'Responsiveness',
      content: 'Promptly addressing our clients needs and concerns is essential, to us.'
    },
  ]
}
