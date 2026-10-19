import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  cart = inject(CartService);
  product = input.required<Product>(); // « donne-moi un Product, obligatoirement »
}
