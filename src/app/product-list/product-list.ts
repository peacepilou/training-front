import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../models/product.model';
import { ProductApiService } from '../product-api.service';

type Filter = 'all' | 'inStock' | 'luxury';

@Component({
  imports: [ProductCard, RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  private readonly productApi = inject(ProductApiService);

  products = signal<Product[]>([]); // vide, en attendant la réponse
  filter = signal<Filter>('all');
  loading = signal(true); // on attend
  error = signal<string | null>(null); // ça a raté

  visibleProducts = computed(() => {
    const products = this.products();
    if (this.filter() === 'inStock') return products.filter((product) => product.stock > 0);
    if (this.filter() === 'luxury') return products.filter((product) => product.price > 1000);
    return products;
  });

  async ngOnInit(): Promise<void> {
    try {
      this.products.set(await this.productApi.getAll());
    } catch {
      this.error.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loading.set(false); // qu'il ait réussi ou raté, on n'attend plus
    }
  }
}
