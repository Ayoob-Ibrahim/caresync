import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderFifthPartComponent } from './tender-fifth-part.component';

describe('TenderFifthPartComponent', () => {
  let component: TenderFifthPartComponent;
  let fixture: ComponentFixture<TenderFifthPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderFifthPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderFifthPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
