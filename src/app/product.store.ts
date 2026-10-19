import { Service, inject, signal } from '@angular/core';
import { Product } from './models/product.model';
import { ProductApiService } from './product-api.service';

@Service()
export class ProductStore {
  private readonly productApi = inject(ProductApiService);

  private readonly productsState = signal<Product[]>([]);
  private readonly loadingState = signal(true);
  private readonly errorState = signal<string | null>(null);

  // en lecture seule pour les composants : seul le store écrit
  readonly products = this.productsState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  async load(): Promise<void> {
    if (this.productsState().length > 0) return; // déjà en mémoire : pas de nouvelle requête
    this.loadingState.set(true);
    this.errorState.set(null);
    try {
      this.productsState.set(await this.productApi.getAll());
    } catch {
      this.errorState.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loadingState.set(false);
    }
  }
}
