import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CalendarAgendaComponent } from './calendar-agenda/calendar-agenda.component';
import { MedalsComponent } from './medals/medals.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'calendar', component: CalendarAgendaComponent },
  { path: 'medals', component: MedalsComponent },
  // Adicione outras rotas aqui, ex: { path: 'profile', component: ProfileComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redireciona a raiz para /home
];