import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';


@Component({
  selector: 'app-services',
  imports: [CommonModule, ServiceCardsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
