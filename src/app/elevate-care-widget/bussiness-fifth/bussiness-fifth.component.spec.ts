import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessFifthComponent } from './bussiness-fifth.component';

describe('BussinessFifthComponent', () => {
  let component: BussinessFifthComponent;
  let fixture: ComponentFixture<BussinessFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessFifthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
