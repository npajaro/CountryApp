import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries/services/countries.service';

describe('CountryesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
