import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Adicione outras rotas aqui, ex: { path: 'profile', component: ProfileComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redireciona a raiz para /home
];