import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },      // l'adresse vide : localhost:4200/
  { path: '**', component: NotFound }, // le joker : toutes les autres adresses
];
