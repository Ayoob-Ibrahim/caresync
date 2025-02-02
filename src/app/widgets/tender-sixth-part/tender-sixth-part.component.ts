import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tender-sixth-part',
  imports: [CommonModule],
  templateUrl: './tender-sixth-part.component.html',
  styleUrl: './tender-sixth-part.component.scss',
})
export class TenderSixthPartComponent {
  data = {
    data: [
      {
        item: '1',
        for: 'normal',
        title: 'Tender Identification',
        content:
          'We’ll identify the tenders that align with your business goals and capabilities.',
      },

      {
        item: '2',
        for: 'normal',
        title: 'Feasibility Analysis',
        content:
          'We evaluate each tender to ensure it’s a good fit for your business, avoiding wasted time and resources.',
      },
      {
        item: '3',
        for: 'normal',
        title: 'Pre-Qualification Questionnaire (PQQ)',
        content:
          'We manage the PQQ stage, ensuring you meet all eligibility requirements before moving forward.',
      },
      {
        item: '4',
        for: 'normal',
        title: 'Bid Strategy & Planning',
        content:
          'We work with you to develop a winning strategy that highlights your strengths and value propositions.',
      },
      {
        item: '5',
        for: 'normal',
        title: 'Market Research & Financial Planning',
        content:
          'We conduct detailed research to ensure your bid is financially competitive and meets local market demands',
      },
      {
        item: '6',
        for: 'normal',
        title: 'Proposal Writing',
        content:
          'Our skilled bid writers craft each proposal with precision, ensuring it is clear, compliant, and compelling.',
      },
      {
        item: '7',
        for: 'normal',
        title: 'Review & Submission',
        content:
          'Before submission, we thoroughly review all documents, ensuring everything is in line with tender requirements',
      },
    ],
    data1: '../../../assets/our-services/pen-write-tender.png',
    data2: [
      {
        item: '8',
        for: 'normal',
        title: 'Post-Submission Support',
        content:
          'We assist with any follow-up queries or additional documentation required after submission, ensuring you stay in the running.',
      },
      {
        item: '9',
        for: 'normal',
        title: 'Continuous Improvement',
        content:
          'After submission, we analyse your bid’s performance, identify areas for improvement, and refine strategies for future tenders.',
      },
    ],
  };
}
