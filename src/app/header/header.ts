import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  imports: [RouterLink], // le template de Header a le droit d'utiliser routerLink
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cart = inject(CartService);

  shipping = signal('Calcul des frais de port…'); // un signal, avec sa valeur de départ

  constructor() {
    setTimeout(() => {
      this.shipping.set('Livraison offerte'); // nouvelle valeur : les composants qui l'affichent sont prévenus
    }, 2000);
  }
}
