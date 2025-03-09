import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDevInitCardComponent } from './policy-dev-init-card.component';

describe('PolicyDevInitCardComponent', () => {
  let component: PolicyDevInitCardComponent;
  let fixture: ComponentFixture<PolicyDevInitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyDevInitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDevInitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
