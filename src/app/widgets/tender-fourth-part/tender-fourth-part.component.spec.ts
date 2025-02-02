import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderFourthPartComponent } from './tender-fourth-part.component';

describe('TenderFourthPartComponent', () => {
  let component: TenderFourthPartComponent;
  let fixture: ComponentFixture<TenderFourthPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderFourthPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderFourthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
