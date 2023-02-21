import { TestBed } from '@angular/core/testing';

import { CartoonDataService } from './cartoon-data.service';

describe('CartoonDataService', () => {
  let service: CartoonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
