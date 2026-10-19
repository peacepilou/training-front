import { Component } from '@angular/core';
import { catalog, Product } from '../products';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product: Product = catalog[1];
  cartCount = 0;

  addToCart(): void {
    this.cartCount = this.cartCount + 1;
  }
}
