import { Component, OnInit, inject, input, signal } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductApiService } from '../product-api.service';
import { Product } from '../models/product.model';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  private readonly productApi = inject(ProductApiService);
  cart = inject(CartService);
  id = input.required<string>(); // le :id de l'adresse, toujours du texte

  product = signal<Product | undefined>(undefined);
  loading = signal(true);

  async ngOnInit(): Promise<void> {
    try {
      this.product.set(await this.productApi.getById(Number(this.id())));
    } catch {
      this.product.set(undefined); // 404, ou réseau coupé : le @else affiche « Produit introuvable »
    } finally {
      this.loading.set(false);
    }
  }
}
