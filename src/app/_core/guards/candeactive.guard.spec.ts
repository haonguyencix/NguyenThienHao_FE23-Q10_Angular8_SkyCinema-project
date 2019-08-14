import { TestBed, async, inject } from '@angular/core/testing';

import { CandeactiveGuard } from './candeactive.guard';

describe('CandeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandeactiveGuard]
    });
  });

  it('should ...', inject([CandeactiveGuard], (guard: CandeactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
