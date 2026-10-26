import { Service, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LoginResponse, User } from './models/user.model';
import { environment } from '../environments/environment';

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/auth`;

  readonly token = signal<string | null>(localStorage.getItem('token')); // relu au démarrage
  readonly isLoggedIn = computed(() => this.token() !== null);

  async login(username: string, password: string): Promise<void> {
    const response = await firstValueFrom(
      this.http.post<LoginResponse>(`${this.url}/login`, { username, password }),
    );
    this.token.set(response.accessToken);
    localStorage.setItem('token', response.accessToken);
  }

  logout(): void {
    this.token.set(null);
    localStorage.removeItem('token');
  }

  me(): Promise<User> {
    return firstValueFrom(this.http.get<User>(`${this.url}/me`));
  }
}
