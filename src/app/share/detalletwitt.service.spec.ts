import { TestBed } from '@angular/core/testing';

import { DetalletwittService } from './detalletwitt.service';

describe('DetalletwittService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalletwittService = TestBed.get(DetalletwittService);
    expect(service).toBeTruthy();
  });
});
