import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCampComponent } from './nature-camp.component';

describe('NatureCampComponent', () => {
  let component: NatureCampComponent;
  let fixture: ComponentFixture<NatureCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
