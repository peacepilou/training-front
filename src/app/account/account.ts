import { Component, OnInit, inject, signal } from '@angular/core';
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
  user = signal<User | null>(null);

  async ngOnInit(): Promise<void> {
    this.user.set(await this.auth.me()); // GET /auth/me
  }
}
