import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductForm } from './product-form';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductForm', () => {
  let component: ProductForm;
  let fixture: ComponentFixture<ProductForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductForm],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('refuse un nom trop court, un prix nul et un stock décimal', () => {
    component.product.set({ title: 'Ta', price: 0, stock: 2.5 });
    expect(component.productForm.title().errors()[0].kind).toBe('minLength');
    expect(component.productForm.price().errors()[0].kind).toBe('min');
    expect(component.productForm.stock().errors()[0].kind).toBe('wholeNumber');
    expect(component.productForm().valid()).toBe(false);
  });

  it('accepte un produit juste', () => {
    component.product.set({ title: 'Tacos al pastor', price: 6.5, stock: 40 });
    expect(component.productForm().valid()).toBe(true);
  });
});
