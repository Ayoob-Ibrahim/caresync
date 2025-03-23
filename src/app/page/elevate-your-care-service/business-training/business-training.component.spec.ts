import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTrainingComponent } from './business-training.component';

describe('BusinessTrainingComponent', () => {
  let component: BusinessTrainingComponent;
  let fixture: ComponentFixture<BusinessTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
