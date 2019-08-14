import { TestBed } from '@angular/core/testing';

import { FilmManagementService } from './film-management.service';

describe('FilmManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmManagementService = TestBed.get(FilmManagementService);
    expect(service).toBeTruthy();
  });
});
