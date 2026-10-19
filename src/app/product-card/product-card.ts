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
  quantity = input.required<number>();
  addToCart = output<Product>(); // l'événement transportera un Product

  onAddClick(): void {
    this.addToCart.emit(this.product()); // envoie le produit de cette carte
  }
}
