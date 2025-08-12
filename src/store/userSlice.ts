import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Profile {
  name: string;
  subtitle: string;
}

interface Preferences {
  theme: 'light' | 'dark';
  notifications: boolean;
}

interface Goals {
  // Define goals
}

interface UserState {
  profile: Profile;
  preferences: Preferences;
  goals: Goals;
}

const initialState: UserState = {
  profile: {
    name: 'Alex',
    subtitle: 'Fitness Enthusiast',
  },
  preferences: {
    theme: 'light',
    notifications: true,
  },
  goals: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      state.preferences = action.payload;
    },
    updateGoals: (state, action: PayloadAction<Goals>) => {
      state.goals = action.payload;
    },
  },
});

export const { updateProfile, setPreferences, updateGoals } = userSlice.actions;

export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;