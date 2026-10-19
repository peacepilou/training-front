import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { provideRouter } from '@angular/router';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      price: 9.99,
      thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
      stock: 99,
      availabilityStatus: 'In Stock',
    });
    fixture.componentRef.setInput('quantity', 0);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
