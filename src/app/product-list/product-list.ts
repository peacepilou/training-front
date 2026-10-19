import { Component, input, output } from '@angular/core';
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
  cart = input.required<Product[]>();
  addToCart = output<Product>();

  showAll(): void {
    this.visibleProducts = this.products;
  }

  showInStock(): void {
    this.visibleProducts = this.products.filter((product) => product.stock > 0);
  }

  showLuxury(): void {
    this.visibleProducts = this.products.filter((product) => product.price > 1000);
  }

  quantityOf(product: Product): number {
    // le nombre d'articles du panier qui ont l'id de ce produit
    return this.cart().filter((item) => item.id === product.id).length;
  }
}
