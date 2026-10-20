import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { ProductDetail } from './product-detail/product-detail';
import { Login } from './login/login';
import { Account } from './account/account';
import { authGuard } from './auth-guard';
import { ProductForm } from './product-form/product-form';
import { Cart } from './cart/cart';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: Home },      // l'adresse vide : localhost:4200/
  { path: 'products/new', component: ProductForm },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'login', component: Login },
  { path: 'account', component: Account, canActivate: [authGuard] },
  { path: 'mentions-legales', component: LegalNotice },
  { path: '**', component: NotFound }, // le joker : toutes les autres adresses
];
