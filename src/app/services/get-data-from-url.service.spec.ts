import { TestBed, inject } from '@angular/core/testing';

import { GetDataFromUrlService } from './get-data-from-url.service';

describe('GetDataFromUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataFromUrlService]
    });
  });

  it('should be created', inject([GetDataFromUrlService], (service: GetDataFromUrlService) => {
    expect(service).toBeTruthy();
  }));
});
