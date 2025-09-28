
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout.model';
import { CommonModule } from '@angular/common';
import { WorkoutDetailComponent } from '../workout-detail/workout-detail.component';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, WorkoutDetailComponent],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }

}
