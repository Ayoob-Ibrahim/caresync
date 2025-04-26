
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { DropdownTriggerForDirective } from '../../directive/dropdown-trigger.directive';
import { DropdownComponent } from '../../custom-cdk/dropdown/dropdown.component';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, ConnectedPosition, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { CardSkeletonComponent } from '../../skeleton-loader/card-skeleton/card-skeleton.component';
import { DataUnavailabiltyComponent } from "../../data-unavailabilty/data-unavailabilty.component";
import { ReactiveFormsModule } from '@angular/forms';
import { SearchableDropDownComponent } from '../../custom-cdk/searchable-drop-down/searchable-drop-down.component';

export const TenderArray: any[] = [
    CommonModule,
    jqxComboBoxModule,
    CardSkeletonComponent,
    CdkListbox,
    CdkOption,
    DropdownTriggerForDirective,
    DataUnavailabiltyComponent,
    DropdownComponent,
    ReactiveFormsModule,
    OverlayModule,
    A11yModule,
    SearchableDropDownComponent, ReactiveFormsModule
]