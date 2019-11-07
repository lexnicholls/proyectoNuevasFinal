import { TestBed } from '@angular/core/testing';

import { TipoDoctorService } from './tipo-doctor.service';

describe('TipoDoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDoctorService = TestBed.get(TipoDoctorService);
    expect(service).toBeTruthy();
  });
});
