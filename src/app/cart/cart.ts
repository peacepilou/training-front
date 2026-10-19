import { Component, inject, signal } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderFacade } from '../order.facade';
import { Order } from '../models/order.model';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cart = inject(CartService); // le même panier que l'en-tête et les cartes : une seule source
  private readonly orderFacade = inject(OrderFacade);
  order = signal<Order | null>(null);
  error = signal<string | null>(null);

  async onCheckout(): Promise<void> {
    this.error.set(null);
    try {
      this.order.set(await this.orderFacade.checkout());
    } catch (error) {
      // une règle de la Facade (throw new Error), ou une réponse HTTP en erreur (401)
      this.error.set(error instanceof Error ? error.message : 'Connecte-toi pour commander.');
    }
  }
}
