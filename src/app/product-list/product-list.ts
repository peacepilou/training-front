import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../models/product.model';
import { catalog } from '../data/catalog';

@Component({
  imports: [ProductCard, RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = catalog;
  visibleProducts: Product[] = catalog;

  showAll(): void {
    this.visibleProducts = this.products;
  }

  showInStock(): void {
    this.visibleProducts = this.products.filter((product) => product.stock > 0);
  }

  showLuxury(): void {
    this.visibleProducts = this.products.filter((product) => product.price > 1000);
  }
}
