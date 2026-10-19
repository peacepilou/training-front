import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product, ProductsResponse } from './models/product.model';

@Service()
export class ProductApiService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://dummyjson.com/products';

  async getAll(): Promise<Product[]> {
    const response = await firstValueFrom(this.http.get<ProductsResponse>(`${this.url}?limit=12`)); // 12 produits sur 194
    return response.products; // le tableau, sorti de l'objet
  }

  getById(id: number): Promise<Product> {
    return firstValueFrom(this.http.get<Product>(`${this.url}/${id}`));
  }
}
