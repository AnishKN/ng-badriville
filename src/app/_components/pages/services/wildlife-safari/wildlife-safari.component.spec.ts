import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeSafariComponent } from './wildlife-safari.component';

describe('WildlifeSafariComponent', () => {
  let component: WildlifeSafariComponent;
  let fixture: ComponentFixture<WildlifeSafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeSafariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlifeSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
