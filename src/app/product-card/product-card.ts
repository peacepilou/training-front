import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>(); // « donne-moi un Product, obligatoirement »
  cartCount = 0;

  addToCart(): void {
    this.cartCount = this.cartCount + 1;
  }
}
