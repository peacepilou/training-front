import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  imports: [ProductList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
