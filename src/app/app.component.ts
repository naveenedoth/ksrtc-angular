import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, HomeComponent, RouterOutlet, RouterLink, RouterLinkActive, TripsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ksrtc';
}
