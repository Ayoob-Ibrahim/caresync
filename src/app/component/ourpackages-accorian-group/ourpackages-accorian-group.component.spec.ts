import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpackagesAccorianGroupComponent } from './ourpackages-accorian-group.component';

describe('OurpackagesAccorianGroupComponent', () => {
  let component: OurpackagesAccorianGroupComponent;
  let fixture: ComponentFixture<OurpackagesAccorianGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurpackagesAccorianGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurpackagesAccorianGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
