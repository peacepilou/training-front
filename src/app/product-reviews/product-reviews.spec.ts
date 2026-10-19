import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductReviews } from './product-reviews';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductReviews', () => {
  let component: ProductReviews;
  let fixture: ComponentFixture<ProductReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReviews],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductReviews);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('reviews', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
