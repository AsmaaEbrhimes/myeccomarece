import { TestBed } from '@angular/core/testing';

import { CreatproductService } from './creatproduct.service';

describe('CreatproductService', () => {
  let service: CreatproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
