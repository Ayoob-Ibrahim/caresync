import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import resources from '../../../../json-data/resources.json'
import { HorizontalCardComponent } from "../../../../widgets/horizontal-card/horizontal-card.component";
@Component({
  selector: 'app-e-book-initial-page',
  imports: [RouterLink, RouterLinkActive, CommonModule, HorizontalCardComponent],
  templateUrl: './e-book-initial-page.component.html',
  styleUrl: './e-book-initial-page.component.scss'
})
export class EBookInitialPageComponent {
  brouchers = resources;




  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goToDetailedView(data: any) {
    this.router.navigate(['detailed-view'], {
      relativeTo: this.activatedRoute,
      state: { detailData: data }  
    });
  }

}
