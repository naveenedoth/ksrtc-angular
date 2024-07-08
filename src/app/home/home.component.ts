import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TripsComponent } from '../trips/trips.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatSidenavModule, RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{

  tripsData = [
    { name: 'Trip 1', destination: 'Beach' },
    { name: 'Trip 2', destination: 'Mountains' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectedFile: File;
  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      console.log('Uploading file:', this.selectedFile);
      this.selectedFile = null;
    }
  }
  gotoTrips(): void {
    this.router.navigate(['/trips'], { state: { trips: this.tripsData } });
  }
  loadTripsComponent() {
    this.router.navigateByUrl('/trips');
  }
} 