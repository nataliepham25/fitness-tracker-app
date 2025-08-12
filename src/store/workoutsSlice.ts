import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Exercise {
  name: string;
  details: string;
  completed: boolean;
}

interface Workout {
  name: string;
  type: string;
  exercises: Exercise[];
}

interface WorkoutsState {
  currentWorkout: Workout | null;
  exerciseHistory: Workout[];
  workoutPlans: Workout[];
  todaysWorkout: Workout | null;
}

const initialState: WorkoutsState = {
  currentWorkout: null,
  exerciseHistory: [],
  workoutPlans: [
    {
      name: 'Push Day',
      type: 'Upper Body Strength',
      exercises: [
        { name: 'Bench Press', details: '4 sets × 8-10 reps', completed: true },
        { name: 'Overhead Press', details: '3 sets × 8-10 reps', completed: true },
        { name: 'Dips', details: '3 sets × 12-15 reps', completed: false },
        { name: 'Push-ups', details: '2 sets × AMRAP', completed: false },
      ],
    },
  ],
  todaysWorkout: {
    name: 'Push Day',
    type: 'Upper Body Strength',
    exercises: [
      { name: 'Bench Press', details: '4 sets × 8-10 reps', completed: true },
      { name: 'Overhead Press', details: '3 sets × 8-10 reps', completed: true },
      { name: 'Dips', details: '3 sets × 12-15 reps', completed: false },
      { name: 'Push-ups', details: '2 sets × AMRAP', completed: false },
    ],
  },
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    startWorkout: (state, action: PayloadAction<Workout>) => {
      state.currentWorkout = action.payload;
    },
    completeExercise: (state, action: PayloadAction<string>) => {
      if (state.currentWorkout) {
        const exercise = state.currentWorkout.exercises.find((e) => e.name === action.payload);
        if (exercise) {
          exercise.completed = true;
        }
      }
    },
    finishWorkout: (state) => {
      if (state.currentWorkout) {
        state.exerciseHistory.push(state.currentWorkout);
        state.currentWorkout = null;
      }
    },
    addWorkoutPlan: (state, action: PayloadAction<Workout>) => {
      state.workoutPlans.push(action.payload);
    },
  },
});

export const { startWorkout, completeExercise, finishWorkout, addWorkoutPlan } = workoutsSlice.actions;

export const getWorkouts = (state: RootState) => state.workouts;

export default workoutsSlice.reducer;