import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // lit le token dans AuthService : Angular appelle l'interceptor, inject y marche
  const token = inject(AuthService).token();
  // pas de token, ou une requête vers un autre site que l'API (environment.apiUrl) ?
  if (token === null || !req.url.startsWith(`${environment.apiUrl}/`)) {
    // la requête part telle quelle
    return next(req);
  }
  // une copie de la requête, avec l'en-tête Authorization en plus, part à la suite
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
