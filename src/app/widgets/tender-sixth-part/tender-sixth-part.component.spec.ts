import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderSixthPartComponent } from './tender-sixth-part.component';

describe('TenderSixthPartComponent', () => {
  let component: TenderSixthPartComponent;
  let fixture: ComponentFixture<TenderSixthPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderSixthPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderSixthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
