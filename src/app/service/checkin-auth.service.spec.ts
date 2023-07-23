import { TestBed } from '@angular/core/testing';

import { CheckinAuthService } from './checkin-auth.service';

describe('CheckinAuthService', () => {
  let service: CheckinAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
