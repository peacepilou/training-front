import { Component, inject, input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';
import { ProductReviews } from '../product-reviews/product-reviews';

@Component({
  imports: [ProductReviews],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  cart = inject(CartService);
  product = input<Product | null>(); // fourni par le resolver, avant l'affichage
}
