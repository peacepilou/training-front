import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { NewProduct, Product, ProductsResponse } from './models/product.model';
import { environment } from '../environments/environment';

@Service()
export class ProductApiService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/products`;

  // GET /products?limit=12&skip=24 : 12 produits, à partir du 25ᵉ, et le total
  getPage(skip: number, limit: number): Promise<ProductsResponse> {
    return firstValueFrom(this.http.get<ProductsResponse>(`${this.url}?limit=${limit}&skip=${skip}`));
  }

  getById(id: number): Promise<Product> {
    return firstValueFrom(this.http.get<Product>(`${this.url}/${id}`));
  }

  add(product: NewProduct): Promise<Product> {
    return firstValueFrom(this.http.post<Product>(`${this.url}/add`, product)); // le corps, en 2ᵉ argument
  }

  // PUT /products/:id : verbe PUT, l'adresse du produit à modifier
  // corps : les seuls champs qui changent, d'où Partial<NewProduct> (ni id, ni thumbnail, ni availabilityStatus)
  // retour : le produit modifié, renvoyé par l'API
  update(id: number, changes: Partial<NewProduct>): Promise<Product> {
    return firstValueFrom(this.http.put<Product>(`${this.url}/${id}`, changes));
  }

  // DELETE /products/:id : verbe DELETE, l'adresse du produit à supprimer, aucun corps
  // retour : le produit supprimé, renvoyé par l'API
  remove(id: number): Promise<Product> {
    return firstValueFrom(this.http.delete<Product>(`${this.url}/${id}`));
  }
}
