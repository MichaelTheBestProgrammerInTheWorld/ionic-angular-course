import { TestBed } from '@angular/core/testing';

import { ResipesService } from './resipes.service';

describe('ResipesService', () => {
  let service: ResipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
