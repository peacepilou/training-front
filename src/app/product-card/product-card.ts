import { Component, inject, input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  cart = inject(CartService);
  product = input.required<Product>(); // « donne-moi un Product, obligatoirement »
}
