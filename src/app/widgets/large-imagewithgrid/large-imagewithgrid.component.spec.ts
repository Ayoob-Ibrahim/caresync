import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImagewithgridComponent } from './large-imagewithgrid.component';

describe('LargeImagewithgridComponent', () => {
  let component: LargeImagewithgridComponent;
  let fixture: ComponentFixture<LargeImagewithgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeImagewithgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeImagewithgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
