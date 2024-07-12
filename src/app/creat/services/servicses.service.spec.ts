import { TestBed } from '@angular/core/testing';

import { ServicsesService } from './servicses.service';

describe('ServicsesService', () => {
  let service: ServicsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
