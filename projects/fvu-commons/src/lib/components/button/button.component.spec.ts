import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvuButtonComponent } from './button.component';

describe('FvuButtonComponent', () => {
  let component: FvuButtonComponent;
  let fixture: ComponentFixture<FvuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
