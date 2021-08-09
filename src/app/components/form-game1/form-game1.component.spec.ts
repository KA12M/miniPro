import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGame1Component } from './form-game1.component';

describe('FormGame1Component', () => {
  let component: FormGame1Component;
  let fixture: ComponentFixture<FormGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGame1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
