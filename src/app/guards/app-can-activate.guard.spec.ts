import { TestBed, async, inject } from '@angular/core/testing';

import { AppCanActivateGuard } from './app-can-activate.guard';

describe('AppCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCanActivateGuard]
    });
  });

  it('should ...', inject([AppCanActivateGuard], (guard: AppCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
