import { TestBed } from '@angular/core/testing';

import { MovimientoDeCuentaService } from './movimiento-de-cuenta.service';

describe('MovimientoDeCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimientoDeCuentaService = TestBed.get(MovimientoDeCuentaService);
    expect(service).toBeTruthy();
  });
});
