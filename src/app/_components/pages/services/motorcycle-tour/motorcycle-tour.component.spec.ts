import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleTourComponent } from './motorcycle-tour.component';

describe('MotorcycleTourComponent', () => {
  let component: MotorcycleTourComponent;
  let fixture: ComponentFixture<MotorcycleTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
