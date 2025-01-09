import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreequentlyAskedComponent } from './freequently-asked.component';

describe('FreequentlyAskedComponent', () => {
  let component: FreequentlyAskedComponent;
  let fixture: ComponentFixture<FreequentlyAskedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreequentlyAskedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreequentlyAskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
