import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowPointsAndBannerComponent } from './arrow-points-and-banner.component';

describe('ArrowPointsAndBannerComponent', () => {
  let component: ArrowPointsAndBannerComponent;
  let fixture: ComponentFixture<ArrowPointsAndBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowPointsAndBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowPointsAndBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
