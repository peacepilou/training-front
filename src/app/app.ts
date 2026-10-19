import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { Product } from './models/product.model';

@Component({
  imports: [RouterOutlet, Header, ProductList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('training-front');

  cart = signal<Product[]>([]);

  constructor() {
    effect(() => {
      console.log('Le panier a changé :', this.cart().length, 'article(s)'); // une ligne par changement
    });
  }

  onAdd(product: Product): void {
    this.cart.update((cart) => [...cart, product]); // un nouveau tableau, à une nouvelle adresse
  }

  onClear(): void {
    this.cart.set([]);
  }
}
