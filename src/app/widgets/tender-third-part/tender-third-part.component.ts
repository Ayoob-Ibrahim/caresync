import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tender-third-part',
  imports: [CommonModule],
  templateUrl: './tender-third-part.component.html',
  styleUrl: './tender-third-part.component.scss',
})
export class TenderThirdPartComponent extends BaseDataReciever {
  data = {
    mastertitle: 'Why Choose Care Sync Experts for Tender Writing?',
    data: [
      {
        title: 'Specialised Industry Expertise',
        content:
          'We focus specifically in the field of health and social care than being general bid writers.The depth of our knowledge, in this sector guarantees that each tender we create is perfectly tailored to meet the standards set by bodies, like the Care Quality Commission (CQC) Care Inspectorate Wales (CIW) and the Regulation and Quality Improvement Authority (RQIA).',
      },
      {
        title: 'End-to-End Tender Management',
        content:
          'Takes care of everything from identifying tenders to providing support after submission. Focusing on compliance with regulations and maximising competitiveness while keeping costs in check.',
      },
      {
        title: 'Proven Results',
        content:
          'Having secured contracts in the health and social care industry over time demonstrates our strategy, in gaining valuable partnerships that enhance both your financial gains and standing in the sector',
      },
      {
        title: 'Tailored Solutions',
        content:
          'Every proposal is individually crafted to match your strengths and objectives in order to enhance your advantage in winning contracts.',
      },
    ],
  };
}
