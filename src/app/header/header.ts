import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  count = input.required<number>();
  clear = output<void>(); // void : l'événement ne transporte rien
}
