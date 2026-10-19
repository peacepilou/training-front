import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  imports: [],
  selector: 'app-account',
  styleUrl: './account.css',
  templateUrl: './account.html',
})
export class Account implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  user = signal<User | null>(null);

  async ngOnInit(): Promise<void> {
    try {
      this.user.set(await this.auth.me()); // GET /auth/me
    } catch {
      this.auth.logout(); // token expiré ou refusé : on repart de la connexion
      this.router.navigateByUrl('/login');
    }
  }
}
