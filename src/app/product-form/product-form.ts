import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormField, form } from '@angular/forms/signals';

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  product = signal({ title: '', price: 0 }); // le modèle : les valeurs du formulaire
  productForm = form(this.product);         // l'état du formulaire, construit sur le modèle
}
