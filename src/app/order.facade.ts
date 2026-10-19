import { Service, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { OrderApiService } from './order-api.service';
import { Order } from './models/order.model';

@Service()
export class OrderFacade {
  private readonly cart = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly orderApi = inject(OrderApiService);

  async checkout(): Promise<Order> {
    const lines = this.cart.lines();
    if (lines.length === 0) {
      throw new Error('Commande refusée : ton panier est vide.'); // règle : pas de commande vide, et pas d'appel réseau pour rien
    }
    const user = await this.auth.me(); // qui commande ? 401 si personne n'est connecté
    const order = await this.orderApi.create(
      user.id,
      lines.map((line) => ({ id: line.product.id, quantity: line.quantity })),
    );
    this.cart.clear(); // la commande est passée : le panier se vide
    return order;
  }
}
