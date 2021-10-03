import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainBikingComponent } from './mountain-biking.component';

describe('MountainBikingComponent', () => {
  let component: MountainBikingComponent;
  let fixture: ComponentFixture<MountainBikingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainBikingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainBikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
