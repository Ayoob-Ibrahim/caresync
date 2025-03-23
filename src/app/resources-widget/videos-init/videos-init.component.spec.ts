import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosInitComponent } from './videos-init.component';

describe('VideosInitComponent', () => {
  let component: VideosInitComponent;
  let fixture: ComponentFixture<VideosInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
