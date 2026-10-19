import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const isLoggedIn = false; // en dur pour l'instant : la vraie connexion arrive au chapitre sur l'authentification

export const authGuard: CanActivateFn = (route, state) => {
  if (isLoggedIn) {
    return true;
  }
  return inject(Router).parseUrl('/login'); // pas connecté : direction la page de connexion
};
