import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { authInterceptor } from './auth-interceptor';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));
  let http: HttpClient;
  let server: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([authInterceptor])), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpClient);
    server = TestBed.inject(HttpTestingController);
    TestBed.inject(AuthService).token.set('un-token'); // une personne connectée
  });

  afterEach(() => {
    server.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('joint le token aux requêtes vers DummyJSON', async () => {
    const promise = firstValueFrom(http.get(`${environment.apiUrl}/auth/me`));
    const request = server.expectOne(`${environment.apiUrl}/auth/me`);
    expect(request.request.headers.get('Authorization')).toBe('Bearer un-token');
    request.flush({});
    await promise;
  });

  it('ne livre jamais le token à un autre site', async () => {
    const promise = firstValueFrom(http.get('https://exemple.com/pixel'));
    const request = server.expectOne('https://exemple.com/pixel');
    expect(request.request.headers.has('Authorization')).toBe(false);
    request.flush({});
    await promise;
  });
});
