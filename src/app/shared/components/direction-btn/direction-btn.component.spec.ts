import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionBtnComponent } from './direction-btn.component';

describe('DirectionBtnComponent', () => {
  let component: DirectionBtnComponent;
  let fixture: ComponentFixture<DirectionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectionBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
