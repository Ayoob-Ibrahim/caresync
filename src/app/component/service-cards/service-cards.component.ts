import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import serviceData from '../../json-data/service-card.json'
import { VerticalCardsComponent } from '../vertical-cards/vertical-cards.component';
import { serviceCardData } from '../../interface/common.interface';
@Component({
  selector: 'app-service-cards',
  imports: [CommonModule, VerticalCardsComponent],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.scss'
})
export class ServiceCardsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  cards: serviceCardData[] = serviceData;

  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
    this.scrollContainer.nativeElement.classList.add('dragging');
  }

  onDragging(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust the scroll speed
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onDragEnd() {
    this.isDragging = false;
    this.scrollContainer.nativeElement.classList.remove('dragging');
  }

  scrollLeft_() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
