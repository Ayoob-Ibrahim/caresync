import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderReadyComponent } from './tender-ready.component';

describe('TenderReadyComponent', () => {
  let component: TenderReadyComponent;
  let fixture: ComponentFixture<TenderReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderReadyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
