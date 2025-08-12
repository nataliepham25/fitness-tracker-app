import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface WeightEntry {
  date: string;
  weight: number;
}

interface MeasurementEntry {
  date: string;
  bodyFatPercentage?: number;
  muscleMass?: number;
}

interface Streaks {
  daysActive: number;
}

interface Achievements {
  // Define achievements if any
}

interface ProgressState {
  weightHistory: WeightEntry[];
  measurementHistory: MeasurementEntry[];
  streaks: Streaks;
  achievements: Achievements;
  monthlyWeightChange: number;
  daysActive: number;
  avgProtein: number;
  workoutsThisMonth: number;
  goalRate: number;
}

const initialState: ProgressState = {
  weightHistory: [],
  measurementHistory: [],
  streaks: {
    daysActive: 28,
  },
  achievements: {},
  monthlyWeightChange: -2.3,
  daysActive: 28,
  avgProtein: 156,
  workoutsThisMonth: 12,
  goalRate: 92,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    addWeightEntry: (state, action: PayloadAction<WeightEntry>) => {
      state.weightHistory.push(action.payload);
    },
    addMeasurement: (state, action: PayloadAction<MeasurementEntry>) => {
      state.measurementHistory.push(action.payload);
    },
    updateStreak: (state) => {
      state.streaks.daysActive += 1;
    },
  },
});

export const { addWeightEntry, addMeasurement, updateStreak } = progressSlice.actions;

export const getWeightTrend = (state: RootState) => {
  // This would be calculated from weightHistory
  return state.progress.monthlyWeightChange;
};

export const getLongestStreak = (state: RootState) => {
  return state.progress.streaks.daysActive;
};

export const getMonthlyProgress = (state: RootState) => {
  return {
    daysActive: state.progress.daysActive,
    avgProtein: state.progress.avgProtein,
    workoutsThisMonth: state.progress.workoutsThisMonth,
    goalRate: state.progress.goalRate,
  };
};

export default progressSlice.reducer;