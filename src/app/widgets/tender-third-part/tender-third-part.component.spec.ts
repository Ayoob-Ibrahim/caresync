import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderThirdPartComponent } from './tender-third-part.component';

describe('TenderThirdPartComponent', () => {
  let component: TenderThirdPartComponent;
  let fixture: ComponentFixture<TenderThirdPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderThirdPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
