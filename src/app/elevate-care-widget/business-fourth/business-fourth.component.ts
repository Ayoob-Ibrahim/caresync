import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-fourth',
  imports: [CommonModule],
  templateUrl: './business-fourth.component.html',
  styleUrl: './business-fourth.component.scss',
})
export class BusinessFourthComponent {
  @Input() data;
  insights = [
    {
      text: 'How to answer questions about leadership, compliance, and operational management',
    },
    { text: 'Best practices in safeguarding and medication management' },
    {
      text: 'Demonstrating your commitment to high-quality care and regulatory compliance',
    },
    {
      text: "Preparing for the fit person interview, showcasing your understanding of the CQC's regulatory framework",
    },
  ];
  discoveries = [
    {
      text: 'Ways to respond to inquiries regarding leadership principles and compliance and operational management',
    },
    { text: 'Best practices in safeguarding and medication management' },
    {
      text: 'Demonstrating your commitment to high-quality care and regulatory compliance',
    },
    {
      text: "Preparing for the fit person interview, showcasing your understanding of the CQC's regulatory framework",
    },
  ];
}
