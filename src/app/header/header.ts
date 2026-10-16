import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model'; // nouveau : le header manipule des produits

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cart = input.required<Product[]>(); // remplace count
  clear = output<void>(); // void : l'événement ne transporte rien
}
