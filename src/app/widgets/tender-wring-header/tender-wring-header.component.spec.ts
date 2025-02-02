import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderWringHeaderComponent } from './tender-wring-header.component';

describe('TenderWringHeaderComponent', () => {
  let component: TenderWringHeaderComponent;
  let fixture: ComponentFixture<TenderWringHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderWringHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderWringHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
