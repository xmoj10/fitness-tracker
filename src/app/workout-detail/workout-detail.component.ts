import { Component, Input } from '@angular/core';
import { Workout } from '../workout.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { MatButtonModule } from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';

import { Set } from '../workout.model';

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent {
  @Input() workout!: Workout;

  toggleCompleted() {
    this.workout.completed = !this.workout.completed;
  }

  toggleSetCompleted(set: Set) {
    set.completed = !set.completed;
  }

  public getExerciseUrl(exerciseName: string): string {
    const query = encodeURIComponent(`${exerciseName} exercise`);
    return `https://www.youtube.com/results?search_query=${query}`;
  }

  public getFocusColorClass(day: number): string {
    return `color-${day}`;
  }
}