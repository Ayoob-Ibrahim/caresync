import { Component } from '@angular/core';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { DropdownTriggerForDirective } from '../../directive/dropdown-trigger.directive';
import { CommonModule } from '@angular/common';
import { CDKBASE } from '../../baseclass/cdk-parental';

@Component({
  selector: 'app-multi-select',
  imports: [DropdownComponent, CdkListbox, CdkOption, DropdownTriggerForDirective, CommonModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent extends CDKBASE{
  filter = {
    title: ['test1', 'test1', 'test1', 'test1',]
  }

 

}
