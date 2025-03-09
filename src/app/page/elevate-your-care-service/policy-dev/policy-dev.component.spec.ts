import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDevComponent } from './policy-dev.component';

describe('PolicyDevComponent', () => {
  let component: PolicyDevComponent;
  let fixture: ComponentFixture<PolicyDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
