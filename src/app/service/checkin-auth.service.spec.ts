import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckinAuthService } from './checkin-auth.service';

describe('CheckinAuthService', () => {
  let service: CheckinAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[ HttpClientTestingModule],
    });
    service = TestBed.inject(CheckinAuthService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
