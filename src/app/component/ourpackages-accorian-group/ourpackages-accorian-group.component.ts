import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AccordianComponent } from '../accordian/accordian.component';

@Component({
  selector: 'app-ourpackages-accorian-group',
  imports: [CommonModule, AccordianComponent],
  templateUrl: './ourpackages-accorian-group.component.html',
  styleUrl: './ourpackages-accorian-group.component.scss',
})
export class OurpackagesAccorianGroupComponent {
  selectedIndex = signal(null);
  data = [
    {
      header: 'Business Plan',
      content:
        "Work with our team to develop a detailed business plan tailored to your care agency, including cash flow forecasts and profit and loss statements to ensure financial stability and growth.<a href='https://example.com/business-plan' target='_blank'",
    },
    {
      header: 'Name Creation',
      content:
        "We assist in brainstorming and selecting a business name that is memorable, marketable, and perfectly suited to your agency's mission and services.",
    },
    {
      header: 'Company Registration',
      content1: 'We handle the entire registration process with ',
      content2:
        ', providing you with all necessary legal documents, both digitally and by post.',

      name: 'Companies House',
      url: 'https://www.gov.uk/limited-company-formation/register-your-company',
    },
    {
      header: 'Business Registration',
      content1: 'We’ll ',
      content2:
        'your company as an official employer, ensuring compliance with all employment regulations, including PAYE setup.',
      name: 'register ',
      url: 'https://www.gov.uk/set-up-limited-company',
    },
    {
      header: 'IT Setup Assistance',
      content:
        'Get expert guidance on the necessary technology, tools, and systems to efficiently run your care agency from day one.',
    },
    {
      header: 'Office Space Assistance',
      content:
        'Our team assists you in identifying and securing the ideal office location that meets your operational needs.',
    },
    {
      header: 'VAT Registration',
      content:
        'We manage the VAT registration process for your company, ensuring all tax obligations are met from the start.',
    },
    {
      header: 'Virtual Telephone Setup',
      content:
        'Enhance your communication with a virtual telephone number, professionally set up to manage client and partner calls.',
    },
    {
      header: 'Corporation Tax Enrollment',
      content:
        'Automatically register for corporation tax with HMRC during company formation, ensuring your business meets all tax obligations.',
    },
    {
      header: 'Data Protection Registration',
      content1:
        'We ensure your agency meets legal data protection requirements by registering with the ',
      content2: 'and covering your first year’s fee.',
      name: 'Information Commissioner’s Office (ICO) ',
      url: 'https://ico.org.uk/',
    },
  ];
}
