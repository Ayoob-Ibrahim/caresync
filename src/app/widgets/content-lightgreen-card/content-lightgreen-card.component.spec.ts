import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLightgreenCardComponent } from './content-lightgreen-card.component';

describe('ContentLightgreenCardComponent', () => {
  let component: ContentLightgreenCardComponent;
  let fixture: ComponentFixture<ContentLightgreenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLightgreenCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLightgreenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
