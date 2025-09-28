import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { StravaService } from './strava.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WorkoutListComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workout-tracker';

  constructor(private stravaService: StravaService) {}

  connectWithStrava() {
    this.stravaService.initiateAuthentication();
  }
}