import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageselecterpartComponent } from './imageselecterpart.component';

describe('ImageselecterpartComponent', () => {
  let component: ImageselecterpartComponent;
  let fixture: ComponentFixture<ImageselecterpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageselecterpartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageselecterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
