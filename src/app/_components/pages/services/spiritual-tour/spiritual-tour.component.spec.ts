import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualTourComponent } from './spiritual-tour.component';

describe('SpiritualTourComponent', () => {
  let component: SpiritualTourComponent;
  let fixture: ComponentFixture<SpiritualTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritualTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
