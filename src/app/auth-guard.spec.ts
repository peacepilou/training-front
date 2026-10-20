import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth-guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  const route = {} as ActivatedRouteSnapshot; // le guard ne les lit pas : des objets vides suffisent
  const state = {} as RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('renvoie vers /login sans token', () => {
    TestBed.inject(AuthService).token.set(null);
    expect(executeGuard(route, state)?.toString()).toBe('/login');
  });

  it('laisse entrer avec un token', () => {
    TestBed.inject(AuthService).token.set('un-token');
    expect(executeGuard(route, state)).toBe(true);
  });
});
