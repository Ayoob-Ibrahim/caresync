import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import resources from '../../../json-data/resources.json'
import { HorizontalCardComponent } from "../../../widgets/horizontal-card/horizontal-card.component";
@Component({
  selector: 'app-brouchers',
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './brouchers.component.html',
  styleUrl: './brouchers.component.scss'
})
export class BrouchersComponent {
  brouchers = resources;
}
