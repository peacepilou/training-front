import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { ProductStore } from '../product.store';

type Filter = 'all' | 'inStock' | 'luxury';

@Component({
  imports: [ProductCard, RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  store = inject(ProductStore);
  filter = signal<Filter>('all');

  visibleProducts = computed(() => {
    const products = this.store.products();
    if (this.filter() === 'inStock') return products.filter((product) => product.stock > 0);
    if (this.filter() === 'luxury') return products.filter((product) => product.price > 1000);
    return products;
  });

  ngOnInit(): void {
    this.store.load();
  }
}
