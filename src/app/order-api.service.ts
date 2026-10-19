import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Order, OrderLine } from './models/order.model';

@Service()
export class OrderApiService {
  private readonly http = inject(HttpClient);

  create(userId: number, products: OrderLine[]): Promise<Order> {
    return firstValueFrom(this.http.post<Order>('https://dummyjson.com/carts/add', { userId, products }));
  }
}
