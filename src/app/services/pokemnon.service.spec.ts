import { TestBed } from '@angular/core/testing';

import { PokemnonService } from './pokemnon.service';

describe('PokemnonServiceService', () => {
  let service: PokemnonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemnonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
