import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { TenderApiService } from '../../tender-api/tender-api.service';
import { HttpService } from '../../service/http.service';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { debounceTime, distinctUntilChanged, forkJoin, fromEvent, map } from 'rxjs';
import { FilterData } from '../../interface/common.interface';
import { CardSkeletonComponent } from '../../skeleton-loader/card-skeleton/card-skeleton.component';
import { DataUnavailabiltyComponent } from "../../data-unavailabilty/data-unavailabilty.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tender-section',
  imports: [CommonModule, jqxComboBoxModule, CardSkeletonComponent, DataUnavailabiltyComponent, ReactiveFormsModule],
  templateUrl: './tender-section.component.html',
  styleUrl: './tender-section.component.scss'
})
export class TenderSectionComponent implements OnInit, AfterViewInit {
  private tenderapi: TenderApiService = inject(TenderApiService);
  private httpService: HttpService = inject(HttpService)
  tenders: any[] | undefined
  filter: FilterData = { title: [], regions: [], category: [], contracts: [] };
  filterQuery = signal<FilterData>({ title: [], regions: [], category: [], contracts: [], description: '' });
  initialcontainer = {
    header: "<span >Discover <span class='txt-dark-secondary'>Healthcare Tender Opportunities:</span> Your Gateway to Growth in the Healthcare Sector</span>",
    "bid_standout": "We know navigating the tender process and meeting regulatory requirements can be challenging. That's why <span class=\"txt-dark-secondary\">Care Sync Expert is here to help:</span>"
  }

  searchControl = new FormControl('');


  constructor() {
    this.TriggerEffects();;
  }


  ngOnInit(): void {
    this.GetData();
  }


  TriggerEffects() {
    effect(() => {
      const { category, contracts, regions, title, description } = this.filterQuery();
      this.tenders = undefined
      this.tenderapi.intialFetch(this.httpService.apiBody(1, description, title, regions, contracts)).subscribe(
        {
          next: res => {
            const {
              body: {
                data: { pagination, tenders }
              }
            } = res;
            this.tenders = tenders;
          }
        }
      )
    });
  }

  GetData(): void {
    forkJoin({
      initial: this.tenderapi.intialFetch(this.httpService.apiBody()),
      filter: this.tenderapi.FilterFetch()
    }).subscribe({
      next: ({ initial, filter }) => {
        const {
          body: {
            data: { pagination, tenders }
          }
        } = initial;
        this.tenders = tenders;
        let { body: { data } } = filter;
        this.filter = data;
      },
      error: err => {
        console.error('Something went wrong', err);
      }
    });
  }

  CheckChange(event: any, type: 'title' | 'contracts' | 'regions'): void {
    const current = this.filterQuery();
    const updatedArray = event?.args.checked
      ? [...current[type], event?.args?.value]
      : current[type].filter(data => data !== event?.args?.value);

    this.filterQuery.update(prev => ({
      ...prev,
      [type]: updatedArray
    }));
  }

  ngAfterViewInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filterQuery.update(current => ({
          ...current,
          description: value.trim()
        }));
      });
  }



}


