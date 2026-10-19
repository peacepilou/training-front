import { Service, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LoginResponse } from './models/user.model';

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://dummyjson.com/auth';

  readonly token = signal<string | null>(null);
  readonly isLoggedIn = computed(() => this.token() !== null);

  async login(username: string, password: string): Promise<void> {
    const response = await firstValueFrom(
      this.http.post<LoginResponse>(`${this.url}/login`, { username, password }),
    );
    this.token.set(response.accessToken);
  }

  logout(): void {
    this.token.set(null);
  }
}
