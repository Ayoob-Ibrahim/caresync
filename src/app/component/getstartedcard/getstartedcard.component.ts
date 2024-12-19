import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-getstartedcard',
  imports: [CommonModule],
  templateUrl: './getstartedcard.component.html',
  styleUrl: './getstartedcard.component.scss'
})
export class GetstartedcardComponent {
@Input() data;
@Output() hoverEvent = new EventEmitter<any>(); // EventEmitter for hover event

onHover(event){
this.hoverEvent.emit(event)
}
}
