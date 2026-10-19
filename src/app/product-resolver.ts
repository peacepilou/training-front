import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductApiService } from './product-api.service';
import { Product } from './models/product.model';

export const productResolver: ResolveFn<Product | null> = async (route) => {
  const productApi = inject(ProductApiService); // avant le premier await
  try {
    return await productApi.getById(Number(route.paramMap.get('id')));
  } catch {
    return null; // 404 : la fiche affichera « Produit introuvable »
  }
};
