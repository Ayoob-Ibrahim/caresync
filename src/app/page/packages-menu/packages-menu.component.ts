import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullImgCardOnBottomComponent } from '../../widgets/full-img-card-on-bottom/full-img-card-on-bottom.component';
import { FourCardsRowWithZoomOptionComponent } from '../../widgets/four-cards-row-with-zoom-option/four-cards-row-with-zoom-option.component';
import { CyanWhiteCardRowLayoutComponent } from '../../widgets/cyan-white-card-row-layout/cyan-white-card-row-layout.component';
import { AccordinListComponent } from '../../widgets/accordin-list/accordin-list.component';
import { FullImgWithDataOnTopComponent } from '../../widgets/full-img-with-data-on-top/full-img-with-data-on-top.component';
import { LiteBlueCardWithColsDataComponent } from '../../widgets/lite-blue-card-with-cols-data/lite-blue-card-with-cols-data.component';
import { ThreeColsLayoutDataWithImgComponent } from '../../widgets/three-cols-layout-data-with-img/three-cols-layout-data-with-img.component';
import { ThreeColsLayoutDataWithLiteBlueBgComponent } from '../../widgets/three-cols-layout-data-with-lite-blue-bg/three-cols-layout-data-with-lite-blue-bg.component';
import { GetStartedBlueCardComponent } from '../../widgets/get-started-blue-card/get-started-blue-card.component';
import { CommonModule } from '@angular/common';
import { ArrowMarkCardsComponent } from '../../widgets/arrow-mark-cards/arrow-mark-cards.component';
import { HalfLayoutImgWithDataComponent } from '../../widgets/half-layout-img-with-data/half-layout-img-with-data.component';
import { DarkBlueCardWithImgComponent } from '../../widgets/dark-blue-card-with-img/dark-blue-card-with-img.component';
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
      FourCardsRowWithZoomOptionComponent,
      CyanWhiteCardRowLayoutComponent,
      AccordinListComponent,
      FullImgWithDataOnTopComponent,
      LiteBlueCardWithColsDataComponent,
      ThreeColsLayoutDataWithImgComponent,
      ThreeColsLayoutDataWithLiteBlueBgComponent,
      GetStartedBlueCardComponent
    ]
  }

}