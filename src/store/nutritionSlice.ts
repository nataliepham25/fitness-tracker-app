import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface NutritionState {
  dailyProtein: number;
  dailyCalories: number;
  waterIntake: number;
  proteinGoal: number;
  calorieGoal: number;
  waterGoal: number;
}

const initialState: NutritionState = {
  dailyProtein: 127,
  dailyCalories: 1847,
  waterIntake: 2.1,
  proteinGoal: 200,
  calorieGoal: 2500,
  waterGoal: 3.0,
};

const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState,
  reducers: {
    addProtein: (state, action: PayloadAction<number>) => {
      state.dailyProtein += action.payload;
    },
    addCalories: (state, action: PayloadAction<number>) => {
      state.dailyCalories += action.payload;
    },
    addWater: (state, action: PayloadAction<number>) => {
      state.waterIntake += action.payload;
    },
    setGoals: (
      state,
      action: PayloadAction<{ proteinGoal?: number; calorieGoal?: number; waterGoal?: number }>
    ) => {
      if (action.payload.proteinGoal) {
        state.proteinGoal = action.payload.proteinGoal;
      }
      if (action.payload.calorieGoal) {
        state.calorieGoal = action.payload.calorieGoal;
      }
      if (action.payload.waterGoal) {
        state.waterGoal = action.payload.waterGoal;
      }
    },
    resetDaily: (state) => {
      state.dailyProtein = 0;
      state.dailyCalories = 0;
      state.waterIntake = 0;
    },
  },
});

export const { addProtein, addCalories, addWater, setGoals, resetDaily } = nutritionSlice.actions;

export const getDailyNutrition = (state: RootState) => state.nutrition;

export const getGoalProgress = (state: RootState) => {
  const { dailyProtein, proteinGoal, dailyCalories, calorieGoal } = state.nutrition;
  const proteinProgress = (dailyProtein / proteinGoal) * 100;
  const calorieProgress = (dailyCalories / calorieGoal) * 100;
  return (proteinProgress + calorieProgress) / 2;
};

export const getWeeklyAverage = (state: RootState) => {
  // This would be implemented with historical data
  return state.nutrition;
};

export default nutritionSlice.reducer;