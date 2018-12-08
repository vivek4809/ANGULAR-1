import { TestBed } from '@angular/core/testing';

import { CapbookServicesService } from './capbook-services.service';

describe('CapbookServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapbookServicesService = TestBed.get(CapbookServicesService);
    expect(service).toBeTruthy();
  });
});
