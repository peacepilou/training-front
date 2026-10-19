import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { NewProduct, Product, ProductsResponse } from './models/product.model';

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
