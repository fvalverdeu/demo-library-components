import { TestBed } from '@angular/core/testing';

import { FvuCommonsService } from './fvu-commons.service';

describe('FvuCommonsService', () => {
  let service: FvuCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FvuCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
