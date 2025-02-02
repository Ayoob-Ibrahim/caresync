import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseDataReciever } from '../../baseclass/parent-data-reciever';

@Component({
  selector: 'app-tender-fourth-part',
  imports: [CommonModule],
  templateUrl: './tender-fourth-part.component.html',
  styleUrl: './tender-fourth-part.component.scss',
})
export class TenderFourthPartComponent extends BaseDataReciever {
  data = [
    {
      for: 'boxbg',
      title: 'Our Comprehensive Tender Writing Approach',
      content:
        'At Care Sync Experts, we follow a structured, strategic approach to maximise your chances of success. Here’s how we drive tender success.',
    },
    {
      for: 'boxcontent',
      data: [
        {
          title: 'Tender Identification',
          content:
            " We use technology to find contracts in your industry so you stay informed about upcoming opportunities at all times. We can also notify you about contracts throughout the UK that match your company's objectives. ",
        },
        {
          title: 'Real-Time Alerts:',
          content: ' Receive notifications about tenders as soon as they open.',
        },
        {
          title: 'Custom Tender Selection:',
          content:
            ' We help you find tenders that match your unique service offerings.',
        },
      ],
    },
    {
      for: 'boxcontent',

      data: [
        {
          title: 'Comprehensive Bid Development',
          content:
            ' Our skilled team of proposal developers meticulously create bids that highlight your capabilities and are customised to fulfil the criteria of the tender process making sure they shine in a crowded market and  ensure compliance with all necessary standards.',
        },
        {
          title: 'Custom Writing:',
          content:
            ' Bids are personalised to your company’s strengths and unique value propositions.',
        },
        {
          title: 'Financial Planning & Research:',
          content:
            ' We ensure that your bid’s financial aspect is competitive and viable for the local market.',
        },
      ],
    },
    {
      for: 'boxcontent',

      data: [
        {
          title: 'Strengthen Your Team’s Capabilities',
          content:
            ' Beyond writing winning tenders, we empower your team with the skills they need to handle bids confidently in the future. Our custom training programmes cover everything from bid writing strategies to project management so that your team is equipped to tackle future tenders head-on.',
        },
        {
          title: 'Interactive Workshops:',
          content:
            ' Hands-on sessions tailored to boost your team’s bid writing skills.',
        },
        {
          title: 'Ongoing Support: ',
          content:
            ' Continuous access to our bid consultants to help refine your strategies over time.',
        },
      ],
    },
  ];
}
