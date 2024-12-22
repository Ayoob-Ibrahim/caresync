import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingMarketComponent } from './growing-market.component';

describe('GrowingMarketComponent', () => {
  let component: GrowingMarketComponent;
  let fixture: ComponentFixture<GrowingMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowingMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowingMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
