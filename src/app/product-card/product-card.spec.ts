import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { CartService } from '../cart.service';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('affiche le titre du produit reçu', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Essence Mascara Lash Princess');
  });

  it('ajoute le produit au panier au clic', async () => {
    const cart = TestBed.inject(CartService);
    fixture.nativeElement.querySelector('button').click();
    await fixture.whenStable(); // sans zone.js : on attend qu'Angular redessine
    expect(cart.count()).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Dans ton panier : 1');
  });

  it('remplace le bouton par un message quand le stock est vide', async () => {
    fixture.componentRef.setInput('product', { ...component.product(), stock: 0 });
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('button')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Victime de son succès');
  });
});
