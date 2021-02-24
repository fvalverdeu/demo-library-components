import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvuCommonsComponent } from './fvu-commons.component';

describe('FvuCommonsComponent', () => {
  let component: FvuCommonsComponent;
  let fixture: ComponentFixture<FvuCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvuCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvuCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
