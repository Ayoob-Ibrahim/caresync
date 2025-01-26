import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicParaWithImageComponent } from './dynamic-para-with-image.component';

describe('DynamicParaWithImageComponent', () => {
  let component: DynamicParaWithImageComponent;
  let fixture: ComponentFixture<DynamicParaWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicParaWithImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicParaWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
