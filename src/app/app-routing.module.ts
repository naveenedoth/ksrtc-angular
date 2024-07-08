import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component'; // Import TripsComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
