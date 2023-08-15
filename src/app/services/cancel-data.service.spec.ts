import { TestBed } from '@angular/core/testing';

import { CancelDataService } from './cancel-data.service';

describe('CancelDataService', () => {
  let service: CancelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
