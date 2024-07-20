import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TripsComponent } from '../trips/trips.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected styleUrls instead of styleUrl
})
export class HomeComponent implements OnInit {
  tripsData = [
    { name: 'Trip 1', destination: 'Beach' },
    { name: 'Trip 2', destination: 'Mountains' },
  ];

  selectedFile: File | null = null; // Initialize selectedFile to null

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFileSelected(event: any): void { // Explicitly type event as any
    this.selectedFile = event.target.files[0] || null;
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

  loadTripsComponent(): void {
    this.router.navigateByUrl('/trips');
  }
}
