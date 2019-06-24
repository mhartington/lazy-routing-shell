import { TestBed, async, inject } from '@angular/core/testing';

import { EnrollmentCanLoadGuard } from './enrollment-can-load.guard';

describe('EnrollmentCanLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrollmentCanLoadGuard]
    });
  });

  it('should ...', inject([EnrollmentCanLoadGuard], (guard: EnrollmentCanLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
