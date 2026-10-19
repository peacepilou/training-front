import { Component, computed, inject, input } from '@angular/core';
import { catalog } from '../data/catalog';
import { CartService } from '../cart.service';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  cart = inject(CartService);
  id = input.required<string>(); // le :id de l'adresse, toujours du texte

  product = computed(() => catalog.find((p) => p.id === Number(this.id())));
}
