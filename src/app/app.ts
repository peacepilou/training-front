import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { CartService } from './cart.service';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('training-front');

  cart = inject(CartService);

  constructor() {
    effect(() => {
      console.log('Le panier a changé :', this.cart.count(), 'article(s)'); // une ligne par changement
    });
  }
}
