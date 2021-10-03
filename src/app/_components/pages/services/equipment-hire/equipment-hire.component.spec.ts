import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentHireComponent } from './equipment-hire.component';

describe('EquipmentHireComponent', () => {
  let component: EquipmentHireComponent;
  let fixture: ComponentFixture<EquipmentHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
