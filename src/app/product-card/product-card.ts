import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>(); // « donne-moi un Product, obligatoirement »
  addToCart = output<Product>(); // l'événement transportera un Product
  cartCount = 0;

  onAddClick(): void {
    this.cartCount = this.cartCount + 1;
    this.addToCart.emit(this.product()); // envoie le produit de cette carte
  }
}
