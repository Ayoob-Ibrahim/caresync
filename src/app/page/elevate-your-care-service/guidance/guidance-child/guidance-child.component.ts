import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, Subject, takeUntil } from 'rxjs';
import { WindowScroller } from '../../../../baseclass/scroll-upper';
import { GUIImgDataComponent } from "../../../../guidance-widgets/gui-img-data/gui-img-data.component";
import { GuiCardDataComponent } from "../../../../guidance-widgets/gui-card-data/gui-card-data.component";
import { FreequentlyAskedComponent } from "../../../../widgets/freequently-asked/freequently-asked.component";
import { HorizontalCardComponent } from "../../../../widgets/horizontal-card/horizontal-card.component";


@Component({
  selector: 'app-guidance-child',
  imports: [CommonModule, GUIImgDataComponent, FreequentlyAskedComponent, GuiCardDataComponent, HorizontalCardComponent],
  templateUrl: './guidance-child.component.html',
  styleUrl: './guidance-child.component.scss',
})
export class GuidanceChildComponent
  extends WindowScroller
  implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  data: any;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.data])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ([params, data]) => {
          const context = params.get('context');
          this.data = data['guidanceData'][context];
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
