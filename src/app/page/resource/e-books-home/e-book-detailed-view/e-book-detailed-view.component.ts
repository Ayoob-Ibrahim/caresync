import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-e-book-detailed-view',
  imports: [CommonModule],
  templateUrl: './e-book-detailed-view.component.html',
  styleUrl: './e-book-detailed-view.component.scss'
})
export class EBookDetailedViewComponent {
  formJson = [
    { formName: 'Your name/Company’s Name', icon: 'bi bi-person-lines-fill' },
    { formName: 'Email address', icon: 'bi bi-envelope' },
    { formName: 'Contact number', icon: 'bi bi-phone-vibrate' },
    { formName: 'Company’s address', icon: 'bi bi-geo-alt-fill' },
    { formName: 'How many care recipients (clients) do you have?', icon: 'bi bi-people-fill' },
  ]
}
