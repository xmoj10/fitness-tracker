import { Routes } from '@angular/router';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { StravaCallbackComponent } from './strava-callback/strava-callback.component';

export const routes: Routes = [
    { path: '', component: WorkoutListComponent, pathMatch: 'full' },
    { path: 'strava-callback', component: StravaCallbackComponent },
    { path: '**', redirectTo: '' }
];