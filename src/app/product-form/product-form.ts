import { Component, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormField, FormRoot, form, min, minLength, required, validate } from '@angular/forms/signals';
import { ProductApiService } from '../product-api.service';
import { Product } from '../models/product.model';

@Component({
  imports: [FormField, FormRoot, JsonPipe],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  private readonly productApi = inject(ProductApiService);

  product = signal({ title: '', price: 0, stock: 0 }); // le modèle : les valeurs du formulaire

  productForm = form(
    this.product,
    (path) => {
      required(path.title, { message: 'Le nom est obligatoire.' });
      minLength(path.title, 3, { message: '3 caractères au moins.' });
      required(path.price, { message: 'Le prix est obligatoire.' });
      min(path.price, 0.01, { message: 'Le prix doit dépasser 0 €.' });
      required(path.stock, { message: 'Le stock est obligatoire.' });
      min(path.stock, 0, { message: 'Le stock ne peut pas être négatif.' });
      validate(path.stock, ({ value }) =>
        Number.isInteger(value()) ? undefined : { kind: 'wholeNumber', message: 'Un nombre entier, sans virgule.' },
      );
    },
    { submission: { action: async () => this.send() } }, // lancée à l'envoi, si tout est valide
  );

  created = signal<Product | null>(null); // le dernier produit créé par DummyJSON
  error = signal<string | null>(null);

  async send(): Promise<void> {
    this.error.set(null); // on efface l'échec précédent
    try {
      this.created.set(await this.productApi.add(this.product())); // le modèle, c'est déjà le corps du POST
      this.product.set({ title: '', price: 0, stock: 0 });
      this.productForm().reset(); // les champs redeviennent non touchés : les messages disparaissent
    } catch {
      this.error.set("L'envoi a échoué. Réessaie dans un instant.");
    }
  }
}
