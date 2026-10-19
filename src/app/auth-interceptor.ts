import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // lit le token dans AuthService : Angular appelle l'interceptor, inject y marche
  const token = inject(AuthService).token();
  // pas de token, ou une requête vers un autre site que DummyJSON ?
  if (token === null || !req.url.startsWith('https://dummyjson.com/')) {
    // la requête part telle quelle
    return next(req);
  }
  // une copie de la requête, avec l'en-tête Authorization en plus, part à la suite
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
