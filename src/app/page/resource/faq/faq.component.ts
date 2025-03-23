import { Component } from '@angular/core';
import faq from '../../../json-data/faq.json';
import { CommonModule } from '@angular/common';
import { FreequentlyAskedComponent } from '../../../widgets/freequently-asked/freequently-asked.component';
import { HorizontalCardComponent } from '../../../widgets/horizontal-card/horizontal-card.component';
@Component({
  selector: 'app-faq',
  imports: [CommonModule, FreequentlyAskedComponent, HorizontalCardComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  resources = faq;
}
