import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { ProductDetail } from './product-detail/product-detail';
import { Account } from './account/account';
import { authGuard } from './auth-guard';
import { Cart } from './cart/cart';
import { LegalNotice } from './legal-notice/legal-notice';
import { productResolver } from './product-resolver';

export const routes: Routes = [
  { path: '', component: Home },      // l'adresse vide : localhost:4200/
  {
    path: 'products/new',
    loadComponent: () => import('./product-form/product-form').then((m) => m.ProductForm), // chargé au premier passage
  },
  { path: 'products/:id', component: ProductDetail, resolve: { product: productResolver } },
  { path: 'cart', component: Cart },
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
  { path: 'account', component: Account, canActivate: [authGuard] },
  { path: 'mentions-legales', component: LegalNotice },
  { path: '**', component: NotFound }, // le joker : toutes les autres adresses
];
