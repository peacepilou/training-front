import { Component, inject, input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  cartService = inject(CartService);
  product = input.required<Product>(); // « donne-moi un Product, obligatoirement »
  quantity = input.required<number>();
  addToCart = output<Product>(); // l'événement transportera un Product

  onAddClick(): void {
    this.addToCart.emit(this.product()); // envoie le produit de cette carte
  }
}
