import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { DropdownPanel } from '../../interface/common.interface';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  constructor() { }
}
