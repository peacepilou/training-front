import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Account } from './account';
import { AuthService } from '../auth.service';
import { Router, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('Account', () => {
  let component: Account;
  let fixture: ComponentFixture<Account>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Account],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Account);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('déconnecte et renvoie vers /login quand le token a expiré', async () => {
    const auth = TestBed.inject(AuthService);
    auth.token.set('le-token-d-hier');
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigateByUrl').mockResolvedValue(true); // on note la navigation, sans la faire

    // ngOnInit a demandé /auth/me à la création : le faux serveur répond « expiré »
    TestBed.inject(HttpTestingController)
      .expectOne(`${environment.apiUrl}/auth/me`)
      .flush({ message: 'Token Expired!' }, { status: 401, statusText: 'Unauthorized' });

    await expect.poll(() => navigate.mock.calls.length).toBe(1);
    expect(navigate).toHaveBeenCalledWith('/login');
    expect(auth.token()).toBeNull();
  });
});
