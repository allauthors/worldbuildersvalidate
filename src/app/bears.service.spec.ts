import { TestBed, inject } from '@angular/core/testing';

import { BearsService } from './bears.service';

describe('BearsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BearsService]
    });
  });

  it('should be created', inject([BearsService], (service: BearsService) => {
    expect(service).toBeTruthy();
  }));
});
