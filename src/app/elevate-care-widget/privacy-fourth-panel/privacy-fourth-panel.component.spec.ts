import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyFourthPanelComponent } from './privacy-fourth-panel.component';

describe('PrivacyFourthPanelComponent', () => {
  let component: PrivacyFourthPanelComponent;
  let fixture: ComponentFixture<PrivacyFourthPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyFourthPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyFourthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
