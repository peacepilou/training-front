import { Component, computed, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product.model'; // nouveau : le header manipule des produits
import { CartService } from '../cart.service';

@Component({
  imports: [RouterLink], // le template de Header a le droit d'utiliser routerLink
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cartService = inject(CartService);
  cart = input.required<Product[]>(); // remplace count
  clear = output<void>(); // void : l'événement ne transporte rien

  shipping = signal('Calcul des frais de port…'); // un signal, avec sa valeur de départ

  count = computed(() => this.cart().length); // se recalcule quand cart change
  total = computed(() =>
    this.cart().reduce((sum, product) => sum + product.price, 0),
  );

  constructor() {
    setTimeout(() => {
      this.shipping.set('Livraison offerte'); // nouvelle valeur : les composants qui l'affichent sont prévenus
    }, 2000);
  }
}
