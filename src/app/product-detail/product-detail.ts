import { Component, computed, input } from '@angular/core';
import { catalog } from '../data/catalog';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  id = input.required<string>(); // le :id de l'adresse, toujours du texte

  product = computed(() => catalog.find((p) => p.id === Number(this.id())));
}
