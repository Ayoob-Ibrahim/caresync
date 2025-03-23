import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFourthComponent } from './business-fourth.component';

describe('BusinessFourthComponent', () => {
  let component: BusinessFourthComponent;
  let fixture: ComponentFixture<BusinessFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessFourthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
