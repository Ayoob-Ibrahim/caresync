import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  imports: [CommonModule],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {
  tenderList = {
    "tenders": [
      {
        "tender_number": "Tender 1",
        "title": "Cambridgeshire County Council Home and Community Support Services DPS",
        "status": "Successfully secured",
        "description": "Enabling Living Plus Care Services to expand their service offerings in the Cambridgeshire and Peterborough areas."
      },
      {
        "tender_number": "Tender 2",
        "title": "Milton Keynes Council Supported Living Open Framework",
        "status": "Won",
        "description": "Allowing the company to deliver supported living services under a new framework agreement starting from 30 August 2023."
      },
      {
        "tender_number": "Tender 3",
        "title": "Hertfordshire County Council Community Opportunity Services Framework",
        "status": "Secured",
        "description": "Providing Living Plus with a platform to deliver community-based care services across Hertfordshire."
      },
      {
        "tender_number": "Tender 4",
        "title": "Southend-on-Sea City Council Approved Provider List (APL) for Community-Based Services",
        "status": "Achieved success",
        "description": "Success in both Lot 1 (Supported Living with Outreach Services) and Lot 2 (Supported Living without Outreach Services), positioning Living Plus as a key service provider in the region."
      },
      {
        "tender_number": "Tender 5",
        "title": "Peterborough City Council Children’s Home and Community Support PDPS",
        "status": "Secured",
        "description": "Secured contracts across multiple lots, enhancing their capacity to deliver high-quality care services for children in need."
      },
      {
        "tender_number": "Tender 6",
        "title": "Medway Council Supported Living for Adults over 18 DPS",
        "status": "Pending",
        "description": "Participated, but the outcome is pending final evaluation."
      },
      {
        "tender_number": "Tender 7",
        "title": "Hertfordshire County Council Support at Home – Spot Providers Framework",
        "status": "Successfully won",
        "description": "Enabling Living Plus to provide vital home support services across multiple areas within Hertfordshire."
      }
    ]
  }

}
