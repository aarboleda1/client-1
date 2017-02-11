/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabSearchService } from './lab-search.service';

describe('LabSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabSearchService]
    });
  });

  it('should ...', inject([LabSearchService], (service: LabSearchService) => {
    expect(service).toBeTruthy();
  }));
});
