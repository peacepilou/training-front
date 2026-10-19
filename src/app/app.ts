import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('training-front');

  cartCount = 0;

  addToCart(): void {
    this.cartCount = this.cartCount + 1;
  }
}
