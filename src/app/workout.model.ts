export interface Set {
  id: number;
  completed: boolean;
}

export interface Exercise {
  name: string;
  description: string;
  reps: string;
  sets: Set[];
}

export interface Workout {
  day: number;
  title: string;
  focus: string;
  exercises: Exercise[];
  completed: boolean;
  isRestDay: boolean;
  restDayShape?: string;
}