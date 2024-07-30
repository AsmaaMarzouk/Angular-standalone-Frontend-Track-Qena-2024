import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userguGuard } from './usergu.guard';

describe('userguGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userguGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
