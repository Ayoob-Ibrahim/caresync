import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowcardGridComponent } from './arrowcard-grid.component';

describe('ArrowcardGridComponent', () => {
  let component: ArrowcardGridComponent;
  let fixture: ComponentFixture<ArrowcardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowcardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowcardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
