import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageTourComponent } from './village-tour.component';

describe('VillageTourComponent', () => {
  let component: VillageTourComponent;
  let fixture: ComponentFixture<VillageTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
