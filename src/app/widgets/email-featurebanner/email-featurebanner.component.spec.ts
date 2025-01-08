import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFeaturebannerComponent } from './email-featurebanner.component';

describe('EmailFeaturebannerComponent', () => {
  let component: EmailFeaturebannerComponent;
  let fixture: ComponentFixture<EmailFeaturebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailFeaturebannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailFeaturebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
