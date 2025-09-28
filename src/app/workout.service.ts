
import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private workouts: Workout[] = [
    {
      day: 1,
      title: 'Push Day',
      focus: 'Chest, Shoulders, Triceps',
      exercises: [
        { name: 'Bench Press', description: 'Lie on a flat bench and press a barbell up from your chest until your arms are fully extended.', reps: '8-12', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Dumbbell Shoulder Press', description: 'Sit on a bench with back support, and press dumbbells overhead until your arms are fully extended.', reps: '8-12', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Incline Dumbbell Press', description: 'Lie on a bench set to a 30-45 degree incline and press dumbbells up from your chest.', reps: '8-12', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Lateral Raises', description: 'Stand with dumbbells at your sides, and raise them out to the sides until they are at shoulder height.', reps: '12-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Tricep Pushdowns', description: 'At a cable machine, push a bar or rope down until your arms are fully extended, keeping elbows at your sides.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Overhead Tricep Extension', description: 'Hold a dumbbell with both hands over your head and lower it behind you by bending your elbows.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
      ],
      completed: false,
      isRestDay: false,
    },
    {
      day: 2,
      title: 'Pull Day',
      focus: 'Back, Biceps, Forearms',
      exercises: [
        { name: 'Barbell Rows', description: 'Bend over with a barbell, keeping your back straight, and pull the barbell up towards your lower chest.', reps: '8-12', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Lat Pulldowns', description: 'At a cable machine, pull a wide bar down to your upper chest, squeezing your back muscles.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Dumbbell Curls', description: 'Stand or sit and curl dumbbells up towards your shoulders, keeping your elbows stationary.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Hammer Curls', description: 'Perform a dumbbell curl with a neutral (palms facing in) grip, like holding a hammer.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Wrist Curls', description: 'Rest your forearms on your thighs or a bench and curl a dumbbell up using only your wrists.', reps: '15-20', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Reverse Wrist Curls', description: 'Like a wrist curl, but with your palms facing down to work the top of your forearms.', reps: '15-20', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
      ],
      completed: false,
      isRestDay: false,
    },
    {
      day: 3,
      title: 'Active Recovery',
      focus: 'LISS Rowing + Core',
      exercises: [
        { name: 'LISS Rowing', description: 'Perform low-intensity, steady-state rowing for an extended period to improve cardiovascular health and aid recovery.', reps: '20-30 min', sets: [{id: 1, completed: false}] },
        { name: 'Plank', description: 'Hold a push-up position on your forearms, keeping your body in a straight line from head to heels.', reps: 'As long as possible', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Leg Raises', description: 'Lie on your back and raise your straight legs up to the ceiling, then lower them slowly.', reps: '15-20', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Russian Twists', description: 'Sit on the floor, lean back, and twist your torso from side to side, optionally holding a weight.', reps: '15-20', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
      ],
      completed: false,
      isRestDay: true,
    },
    {
      day: 4,
      title: 'Leg Day',
      focus: 'Quads, Hamstrings, Glutes',
      exercises: [
        { name: 'Squats', description: 'With a barbell on your back, lower your hips as if sitting in a chair, keeping your chest up and back straight.', reps: '8-12', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Romanian Deadlifts', description: 'Holding a barbell, hinge at your hips and lower the weight down your legs, keeping your back straight and legs nearly straight.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Leg Press', description: 'On a leg press machine, push the platform away from you by extending your knees and hips.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Leg Curls', description: 'On a leg curl machine, curl the pad towards your glutes by bending your knees.', reps: '10-15', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}] },
        { name: 'Calf Raises', description: 'Stand with weights and push through the balls of your feet to raise your heels up, then lower them slowly.', reps: '15-20', sets: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}, {id: 4, completed: false}] },
      ],
      completed: false,
      isRestDay: false,
    },
    {
      day: 5,
      title: 'Active Recovery',
      focus: 'LISS Rowing',
      exercises: [
        { name: 'LISS Rowing', description: 'Perform low-intensity, steady-state rowing for an extended period to improve cardiovascular health and aid recovery.', reps: '20-30 min', sets: [{id: 1, completed: false}] },
      ],
      completed: false,
      isRestDay: true,
    },
    {
      day: 6,
      title: 'Rest Day',
      focus: 'Full Rest',
      exercises: [],
      completed: false,
      isRestDay: true,
      restDayShape: 'blob',
    },
    {
      day: 7,
      title: 'Rest Day',
      focus: 'Full Rest',
      exercises: [],
      completed: false,
      isRestDay: true,
    },
  ];

  constructor() { }

  getWorkouts() {
    return this.workouts;
  }
}
