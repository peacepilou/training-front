import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Order, OrderLine } from './models/order.model';
import { environment } from '../environments/environment';

@Service()
export class OrderApiService {
  private readonly http = inject(HttpClient);

  create(userId: number, products: OrderLine[]): Promise<Order> {
    return firstValueFrom(this.http.post<Order>(`${environment.apiUrl}/carts/add`, { userId, products }));
  }
}
