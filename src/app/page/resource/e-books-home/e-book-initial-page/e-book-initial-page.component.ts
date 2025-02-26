import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-e-book-initial-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './e-book-initial-page.component.html',
  styleUrl: './e-book-initial-page.component.scss'
})
export class EBookInitialPageComponent {


  


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goToDetailedView() {
    this.router.navigate(['detailed-view'], { relativeTo: this.activatedRoute });
  }
}
