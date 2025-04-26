
import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { TenderApiService } from '../../tender-api/tender-api.service';
import { HttpService } from '../../service/http.service';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { asyncScheduler, debounceTime, distinctUntilChanged, filter, forkJoin, fromEvent, map, mapTo, merge, Observable, startWith } from 'rxjs';
import { FilterData, Pagination } from '../../interface/common.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TenderArray } from './tender-section.imports';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, ConnectedPosition } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes'
import { DropdownTriggerForDirective } from '../../directive/dropdown-trigger.directive';
import { MultiSelectComponent } from "../../custom-cdk/multi-select/multi-select.component";
@Component({
  selector: 'app-tender-section',
  imports: [...TenderArray, MultiSelectComponent],
  templateUrl: './tender-section.component.html',
  styleUrl: './tender-section.component.scss'
})
export class TenderSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('title', { static: false }) title!: jqxComboBoxComponent;
  private tenderapi: TenderApiService = inject(TenderApiService);
  private httpService: HttpService = inject(HttpService)
  tenders: any[] | undefined;
  pagination: Pagination;
  cardType: 'grid' | 'list' = 'grid';
  filter: FilterData = { title: [], regions: [], category: [], contracts: [] };
  filterQuery = signal<FilterData>({ title: [], regions: [], category: [], contracts: [], description: '', page: 1 });
  initialcontainer = {
    header: "<span >Discover <span class='txt-dark-secondary'>Healthcare Tender Opportunities:</span> Your Gateway to Growth in the Healthcare Sector</span>",
    "bid_standout": "We know navigating the tender process and meeting regulatory requirements can be challenging. That's why <span class=\"txt-dark-secondary\">Care Sync Expert is here to help:</span>"
  }
  @ViewChild('toggleData_title', { read: DropdownTriggerForDirective })
  toggleData_title!: DropdownTriggerForDirective;
  searchControl = new FormControl('');
  constructor() {
    this.TriggerEffects();;
  }


  ngOnInit(): void {
    this.GetData();
  }


  TriggerEffects() {
    effect(() => {
      const { category, contracts, regions, title, description, page } = this.filterQuery();
      this.tenders = undefined
      this.tenderapi.intialFetch(this.httpService.apiBody(page, description, title, regions, contracts)).subscribe(
        {
          next: res => {
            const {
              body: {
                data: { pagination, tenders }
              }
            } = res;
            this.tenders = tenders;
            this.pagination = pagination;
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
    this.filterQuery.update(prev => ({
      ...prev,
      [type]: event.value
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

    // this.testdata()
  }


  viewType(type: 'grid' | 'list'): void {
    this.cardType = type;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.pagination?.totalPages) {
      this.pagination.page = page;
      this.filterQuery.update(prev => ({
        ...prev,
        page
      }));
    }
  }

  get pages() {
    return Array.from({ length: this.pagination?.totalPages }, (_, i) => i + 1);
  }

 

}


