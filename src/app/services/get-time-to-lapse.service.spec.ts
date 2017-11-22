import { TestBed, inject } from '@angular/core/testing';

import { GetTimeToLapseService } from './get-time-to-lapse.service';

describe('GetTimeToLapseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTimeToLapseService]
    });
  });

  it('should be created', inject([GetTimeToLapseService], (service: GetTimeToLapseService) => {
    expect(service).toBeTruthy();
  }));
});
