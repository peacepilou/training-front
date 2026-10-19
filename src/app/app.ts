import { Component, signal } from '@angular/core';
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

  cart: Product[] = [];

  onAdd(product: Product): void {
    this.cart = [...this.cart, product]; // un nouveau tableau : l'ancien + ce produit
  }

  onClear(): void {
    this.cart = [];
  }
}
