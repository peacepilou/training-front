import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  imports: [RouterLink], // le template de Header a le droit d'utiliser routerLink
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cart = inject(CartService);
  auth = inject(AuthService);
  private readonly router = inject(Router);

  shipping = signal('Calcul des frais de port…'); // un signal, avec sa valeur de départ

  constructor() {
    setTimeout(() => {
      this.shipping.set('Livraison offerte'); // nouvelle valeur : les composants qui l'affichent sont prévenus
    }, 2000);
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/'); // plus connecté : retour à l'accueil
  }
}
