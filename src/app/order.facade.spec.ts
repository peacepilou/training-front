import { TestBed } from '@angular/core/testing';
import { OrderFacade } from './order.facade';

describe('OrderFacade', () => {
  let service: OrderFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
