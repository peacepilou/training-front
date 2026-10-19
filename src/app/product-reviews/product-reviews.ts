import { Component, input } from '@angular/core';
import { Review } from '../models/product.model';

@Component({
  imports: [],
  selector: 'app-product-reviews',
  styleUrl: './product-reviews.css',
  templateUrl: './product-reviews.html',
})
export class ProductReviews {
  reviews = input.required<Review[]>();
}
