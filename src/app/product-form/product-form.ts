import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormField, FormRoot, form, min, minLength, required, validate } from '@angular/forms/signals';

@Component({
  imports: [FormField, FormRoot, JsonPipe],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
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

  sent = signal<{ title: string; price: number; stock: number } | null>(null); // le dernier produit prêt à partir

  async send(): Promise<void> {
    // ici, l'appel à l'API qui enregistre le produit : tu l'écris au chapitre suivant
    this.sent.set(this.product());
    this.product.set({ title: '', price: 0, stock: 0 });
    this.productForm().reset(); // les champs redeviennent non touchés : les messages disparaissent
  }
}
