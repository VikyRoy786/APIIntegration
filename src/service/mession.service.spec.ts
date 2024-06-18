import { TestBed } from '@angular/core/testing';

import { MessionService } from './mession.service';

describe('MessionService', () => {
  let service: MessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
