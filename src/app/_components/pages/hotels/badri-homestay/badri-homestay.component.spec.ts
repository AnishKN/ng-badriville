import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadriHomestayComponent } from './badri-homestay.component';

describe('BadriHomestayComponent', () => {
  let component: BadriHomestayComponent;
  let fixture: ComponentFixture<BadriHomestayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadriHomestayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadriHomestayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
