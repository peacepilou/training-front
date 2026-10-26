import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductApiService } from './product-api.service';
import { environment } from '../environments/environment';

describe('ProductApiService', () => {
  let service: ProductApiService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()], // aucune requête ne part sur le réseau
    });
    service = TestBed.inject(ProductApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify(); // échoue si une requête est restée sans réponse
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('demande un produit par son id', async () => {
    const promise = service.getById(9);
    const request = http.expectOne(`${environment.apiUrl}/products/9`);
    expect(request.request.method).toBe('GET');
    request.flush({ id: 9, title: 'Dolce Shine Eau de' }); // la réponse du faux serveur
    const product = await promise;
    expect(product.title).toBe('Dolce Shine Eau de');
  });

  it('rejette un produit introuvable', async () => {
    const promise = service.getById(999);
    http
      .expectOne(`${environment.apiUrl}/products/999`)
      .flush({ message: "Product with id '999' not found" }, { status: 404, statusText: 'Not Found' });
    await expect(promise).rejects.toMatchObject({ status: 404 });
  });

  it('envoie le nouveau produit dans le corps du POST', async () => {
    const promise = service.add({ title: 'Tacos al pastor', price: 6.5, stock: 40 });
    const request = http.expectOne(`${environment.apiUrl}/products/add`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ title: 'Tacos al pastor', price: 6.5, stock: 40 });
    request.flush({ id: 195, title: 'Tacos al pastor', price: 6.5, stock: 40 });
    expect((await promise).id).toBe(195);
  });
});
