import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesstraingFullWithInitpanelComponent } from './businesstraing-full-with-initpanel.component';

describe('BusinesstraingFullWithInitpanelComponent', () => {
  let component: BusinesstraingFullWithInitpanelComponent;
  let fixture: ComponentFixture<BusinesstraingFullWithInitpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinesstraingFullWithInitpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinesstraingFullWithInitpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
