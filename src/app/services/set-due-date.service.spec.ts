import { TestBed, inject } from '@angular/core/testing';

import { SetDueDateService } from './set-due-date.service';

describe('SetDueDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetDueDateService]
    });
  });

  it('should be created', inject([SetDueDateService], (service: SetDueDateService) => {
    expect(service).toBeTruthy();
  }));
});
