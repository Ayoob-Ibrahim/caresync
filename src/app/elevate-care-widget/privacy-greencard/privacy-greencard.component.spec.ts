import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyGreencardComponent } from './privacy-greencard.component';

describe('PrivacyGreencardComponent', () => {
  let component: PrivacyGreencardComponent;
  let fixture: ComponentFixture<PrivacyGreencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyGreencardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyGreencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
