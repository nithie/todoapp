import { TestBed, inject } from '@angular/core/testing';

import { DisplayTaskService } from './display-task.service';

describe('DisplayTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayTaskService]
    });
  });

  it('should be created', inject([DisplayTaskService], (service: DisplayTaskService) => {
    expect(service).toBeTruthy();
  }));
});
