import { TestBed } from '@angular/core/testing';

import { TipoDeClientesService } from './tipo-de-clientes.service';

describe('TipoDeClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDeClientesService = TestBed.get(TipoDeClientesService);
    expect(service).toBeTruthy();
  });
});
