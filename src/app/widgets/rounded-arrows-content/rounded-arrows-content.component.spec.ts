import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedArrowsContentComponent } from './rounded-arrows-content.component';

describe('RoundedArrowsContentComponent', () => {
  let component: RoundedArrowsContentComponent;
  let fixture: ComponentFixture<RoundedArrowsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundedArrowsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedArrowsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
