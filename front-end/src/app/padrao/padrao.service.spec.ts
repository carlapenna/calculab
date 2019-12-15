import { TestBed } from '@angular/core/testing';

import { PadraoService } from './padrao.service';

describe('PadraoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PadraoService = TestBed.get(PadraoService);
    expect(service).toBeTruthy();
  });
});
