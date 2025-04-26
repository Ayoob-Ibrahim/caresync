import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { CDKBASE } from '../../baseclass/cdk-parental';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subscription, takeUntil } from 'rxjs';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { DropdownTriggerForDirective } from '../../directive/dropdown-trigger.directive';
import { SearchDropdownPipe } from '../../pipe/search-drop-down-pipe';

@Component({
  selector: 'app-searchable-drop-down',
  imports: [CommonModule, CdkListbox, CdkOption,
    ReactiveFormsModule, DropdownComponent,SearchDropdownPipe,
    DropdownTriggerForDirective],
  templateUrl: './searchable-drop-down.component.html',
  styleUrl: './searchable-drop-down.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchableDropDownComponent),
      multi: true
    }
  ]
})
export class SearchableDropDownComponent extends CDKBASE {
  @ViewChild('inputData') inputData!: ElementRef<HTMLInputElement>;
  @ViewChild(DropdownComponent) dropdown!: DropdownComponent;
  languageCtrl = new FormControl([]);
  private inputSubscription!: Subscription;


  protected override inputlisterer(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.onSearchChange(value)
    });
  }

  protected override initailDataController(data): void {

  }

}
