import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoroughSupportforCqcRegistrationComponent } from './thorough-supportfor-cqc-registration.component';

describe('ThoroughSupportforCqcRegistrationComponent', () => {
  let component: ThoroughSupportforCqcRegistrationComponent;
  let fixture: ComponentFixture<ThoroughSupportforCqcRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoroughSupportforCqcRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoroughSupportforCqcRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
