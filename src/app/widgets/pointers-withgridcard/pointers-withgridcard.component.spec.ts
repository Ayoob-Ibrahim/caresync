import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointersWithgridcardComponent } from './pointers-withgridcard.component';

describe('PointersWithgridcardComponent', () => {
  let component: PointersWithgridcardComponent;
  let fixture: ComponentFixture<PointersWithgridcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointersWithgridcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointersWithgridcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
