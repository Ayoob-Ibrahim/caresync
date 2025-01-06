import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightgreenGridBoxComponent } from './lightgreen-grid-box.component';

describe('LightgreenGridBoxComponent', () => {
  let component: LightgreenGridBoxComponent;
  let fixture: ComponentFixture<LightgreenGridBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightgreenGridBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightgreenGridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
