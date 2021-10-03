import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaCampComponent } from './yoga-camp.component';

describe('YogaCampComponent', () => {
  let component: YogaCampComponent;
  let fixture: ComponentFixture<YogaCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
