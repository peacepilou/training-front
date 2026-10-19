import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, form, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  credentials = signal({ username: '', password: '' });

  loginForm = form(
    this.credentials,
    (path) => {
      required(path.username, { message: "L'identifiant est obligatoire." });
      required(path.password, { message: 'Le mot de passe est obligatoire.' });
    },
    { submission: { action: async () => this.login() } },
  );

  error = signal<string | null>(null);

  async login(): Promise<void> {
    const { username, password } = this.credentials();
    this.error.set(null);
    try {
      await this.auth.login(username, password);
      this.router.navigateByUrl('/account'); // connecté : direction « Mon compte »
    } catch {
      this.error.set('Identifiant ou mot de passe incorrect.');
    }
  }
}
