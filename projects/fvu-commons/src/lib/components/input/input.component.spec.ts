import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvuInputComponent } from './input.component';

describe('FvuInputComponent', () => {
  let component: FvuInputComponent;
  let fixture: ComponentFixture<FvuInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvuInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
