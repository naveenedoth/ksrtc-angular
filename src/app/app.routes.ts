import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent }, 
  { path: 'navbar', component: NavbarComponent }, 
  { path: 'trips', component: TripsComponent },
];
