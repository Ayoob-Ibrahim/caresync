import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSecondComponent } from './business-second.component';

describe('BusinessSecondComponent', () => {
  let component: BusinessSecondComponent;
  let fixture: ComponentFixture<BusinessSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
