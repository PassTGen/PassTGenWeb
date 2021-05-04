import { TestBed } from '@angular/core/testing';

import { PasstgenApiService } from './passtgen-api.service';

describe('PasstgenApiService', () => {
  let service: PasstgenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasstgenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
