import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TenderApiService } from '../../tender-api/tender-api.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-tender-section',
  imports: [CommonModule],
  templateUrl: './tender-section.component.html',
  styleUrl: './tender-section.component.scss'
})
export class TenderSectionComponent implements OnInit {
  private tenderapi: TenderApiService = inject(TenderApiService);
  private httpService: HttpService = inject(HttpService)
  tenders: any[] = []
  initialcontainer = {
    header: "<span >Discover <span class='txt-dark-secondary'>Healthcare Tender Opportunities:</span> Your Gateway to Growth in the Healthcare Sector</span>",
    "bid_standout": "We know navigating the tender process and meeting regulatory requirements can be challenging. That's why <span class=\"txt-dark-secondary\">Care Sync Expert is here to help:</span>"
  }

 

  ngOnInit(): void {
    this.GetData();
  }


  GetData(): void {
    this.tenderapi.intialFetch(this.httpService.apiBody()).subscribe({
      next: res => {
        let { body, message, status, body: { data: { pagination, tenders, } } } = res;
        this.tenders = tenders;
        console.log(tenders)
      },
      error: err => {
        console.error('Something went wrong', err);
      },
    })
  }
}
