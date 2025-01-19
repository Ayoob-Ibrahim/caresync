import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgArrowUpComponent } from './bg-arrow-up.component';

describe('BgArrowUpComponent', () => {
  let component: BgArrowUpComponent;
  let fixture: ComponentFixture<BgArrowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgArrowUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgArrowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
