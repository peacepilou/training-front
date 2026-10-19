import { Service, computed, inject, signal } from '@angular/core';
import { Product } from './models/product.model';
import { ProductApiService } from './product-api.service';

@Service()
export class ProductStore {
  private readonly productApi = inject(ProductApiService);
  readonly pageSize = 12;

  private readonly productsState = signal<Product[]>([]);
  private readonly loadingState = signal(true);
  private readonly errorState = signal<string | null>(null);
  private readonly pageState = signal(0); // la page affichée, comptée à partir de 0
  private readonly totalState = signal(0); // le nombre de produits chez DummyJSON

  // en lecture seule pour les composants : seul le store écrit
  readonly products = this.productsState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();
  readonly page = this.pageState.asReadonly();
  readonly pageCount = computed(() => Math.ceil(this.totalState() / this.pageSize));

  async goTo(page: number): Promise<void> {
    if (page === this.pageState() && this.productsState().length > 0) return; // cette page est déjà en mémoire
    this.loadingState.set(true);
    this.errorState.set(null);
    try {
      const response = await this.productApi.getPage(page * this.pageSize, this.pageSize);
      this.productsState.set(response.products);
      this.totalState.set(response.total);
      this.pageState.set(page);
    } catch {
      this.errorState.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loadingState.set(false);
    }
  }
}
