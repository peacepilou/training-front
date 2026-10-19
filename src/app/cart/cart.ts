import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cart = inject(CartService); // le même panier que l'en-tête et les cartes : une seule source
}
