import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadriResortsComponent } from './badri-resorts.component';

describe('BadriResortsComponent', () => {
  let component: BadriResortsComponent;
  let fixture: ComponentFixture<BadriResortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadriResortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadriResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
