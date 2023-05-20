import { TestBed } from '@angular/core/testing';

import { IncendiosService } from './incendios.service';

describe('IncendiosService', () => {
  let service: IncendiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncendiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
