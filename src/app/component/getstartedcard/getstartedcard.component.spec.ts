import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedcardComponent } from './getstartedcard.component';

describe('GetstartedcardComponent', () => {
  let component: GetstartedcardComponent;
  let fixture: ComponentFixture<GetstartedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetstartedcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
