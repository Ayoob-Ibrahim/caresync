import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullImgCardOnBottomComponent } from '../../widgets/full-img-card-on-bottom/full-img-card-on-bottom.component';
import { SHARED_WIDGETS_PACKAGE } from './packages-widgets-imports';

@Component({
  selector: 'app-packages-menu',
  imports: SHARED_WIDGETS_PACKAGE,
  templateUrl: './packages-menu.component.html',
  styleUrl: './packages-menu.component.scss'
})
export class PackagesMenuComponent implements OnInit {
  public packageId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.packageId = this.route.snapshot.paramMap.get('id');
  }


  componentList = {
    'DomiciliaryCare': [
      FullImgCardOnBottomComponent,
    ]
  }

}