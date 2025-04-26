
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
@Component({
  selector: 'app-tender-section',
  imports: [...TenderArray],
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


  // testdataa
  states: any[] = [
    {
      name: 'Vienna',
      population: '1.897M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Vienna.svg/800px-Flag_of_Vienna.svg.png',
    },
    {
      name: 'Salzburg',
      population: '152.367K',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Salzburg_%28state%29.svg/1280px-Flag_of_Salzburg_%28state%29.svg.png',
    },
    {
      name: 'Kiev',
      population: '2.884M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kyiv_Kurovskyi.svg',
    },
    {
      name: 'Novopskov',
      population: '9,891K',
      flag:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png/100px-Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png',
    },

  ];





  private escPresses$: Observable<KeyboardEvent>;
  private isPanelVisible$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;
  showPanel$: Observable<boolean>;
  private focusMonitor: FocusMonitor = inject(FocusMonitor);
  public positions: ConnectedPosition[] = [{
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',

  }, {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    panelClass: 'no-enogh-space-at-bottom',
  },];
  isCaseSensitive: boolean = false;
  @ViewChild('inputBox', { read: ElementRef, static: true }) private inputEl: ElementRef;


  @ViewChild(CdkConnectedOverlay, { static: true, read : CdkConnectedOverlay }) private connectedOverlay: CdkConnectedOverlay;

  filteredStates$: Observable<any[]>;
  stateCtrl = new FormControl();


  testdata() {

    this.escPresses$ = this.connectedOverlay?.overlayKeydown.pipe(
      filter(({ keyCode }) => keyCode === ESCAPE)
    )




    this.isPanelHidden$ = merge(
      // this.escPresses$, // demonstrtaion purpose using the cdk key codes
      this.connectedOverlay?.detach,
      this.connectedOverlay?.backdropClick).pipe(mapTo(false))

    this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
      filter((focused) => !!focused),
      mapTo(true)
    );

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);


    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    )
  }


  private _filterStates(value: any): any[] {
    const filterValue = this.caseCheck(value);

    return this.states.filter(
      (state) => this.caseCheck(state.name).indexOf(filterValue) === 0
    );
  }

  private caseCheck(value: string) {
    return this.isCaseSensitive ? value : value.toLowerCase();
  }



}


