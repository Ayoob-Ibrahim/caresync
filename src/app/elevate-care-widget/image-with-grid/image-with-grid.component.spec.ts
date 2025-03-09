import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithGridComponent } from './image-with-grid.component';

describe('ImageWithGridComponent', () => {
  let component: ImageWithGridComponent;
  let fixture: ComponentFixture<ImageWithGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWithGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWithGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
