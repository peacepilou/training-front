import { Service, computed, signal } from '@angular/core';
import { Product } from './models/product.model';

@Service()
export class CartService {
  private readonly items = signal<Product[]>([]); // le panier : seul le service y touche

  readonly count = computed(() => this.items().length);
  // une ligne par produit, avec sa quantité : regroupée par id, car deux réponses HTTP donnent deux objets
  readonly lines = computed(() => {
    const unique = this.items().filter(
      (item, index, items) => items.findIndex((other) => other.id === item.id) === index, // premier exemplaire de chaque id
    );
    return unique.map((product) => ({ product, quantity: this.quantityOf(product) }));
  });
  readonly total = computed(() =>
    this.items().reduce((sum, product) => sum + product.price, 0),
  );

  add(product: Product): void {
    this.items.update((items) => [...items, product]); // un nouveau tableau, comme toujours
  }

  removeOne(product: Product): void {
    const index = this.items().findIndex((item) => item.id === product.id); // par id, pas par adresse
    this.items.update((items) => items.filter((_, i) => i !== index)); // un nouveau tableau, sans cet exemplaire
  }

  clear(): void {
    this.items.set([]);
  }

  quantityOf(product: Product): number {
    return this.items().filter((item) => item.id === product.id).length;
  }
}
