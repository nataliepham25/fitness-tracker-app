# GEMINI.md - Fitness Tracker App Context

## Project Overview
This is a React Native Expo TypeScript project for a minimalist fitness tracking app. The app tracks protein intake, workouts, water consumption, and fitness goals with a clean, beige/white aesthetic.

## Design Reference
**CRITICAL**: Always reference the `mockup.html` file in the project root for exact styling, measurements, and visual hierarchy. This contains the complete design system that must be matched pixel-perfect.

### Color Palette (from mockup.html)
```typescript
// src/constants/Colors.ts
export const Colors = {
  primary: '#ffffff',        // Primary white
  background: '#f5f4f2',     // Background beige
  cardBackground: '#fafaf9', // Card background
  accent: '#e8e5e1',         // Accent beige
  textDark: '#333333',       // Primary text
  textLight: '#999999',      // Secondary text
};
```

### Design System Specifications (from mockup.html)
- **Card border-radius**: 16px
- **Navigation border-radius**: 20px  
- **Card shadow**: `0 2px 8px rgba(0, 0, 0, 0.05)`
- **Protein circle**: 200px diameter with gradient `linear-gradient(135deg, #f8f6f3 0%, #e8e5e1 100%)`
- **Standard padding**: 20px
- **Typography**: Light weights (300) for large numbers, medium (500) for labels

## Project Architecture

### Tech Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **State Management**: Redux Toolkit
- **Storage**: AsyncStorage
- **Styling**: StyleSheet (no external UI libraries)

### Folder Structure
```
project-root/
├── app/                    # Expo Router files
│   ├── _layout.tsx        # Root layout with Redux Provider
│   └── (tabs)/            # Tab-based navigation
│       ├── _layout.tsx    # Custom tab bar with floating + button
│       ├── index.tsx      # Home screen (protein tracker)
│       ├── stats.tsx      # Progress/Analytics screen
│       ├── workouts.tsx   # Workout tracking screen
│       └── profile.tsx    # Profile and settings
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── CircularProgress.tsx
│   │   ├── StatCard.tsx
│   │   └── Button.tsx
│   ├── constants/
│   │   ├── Colors.ts
│   │   └── Layout.ts
│   ├── store/             # Redux store and slices
│   │   ├── index.ts
│   │   ├── nutritionSlice.ts
│   │   ├── workoutSlice.ts
│   │   ├── progressSlice.ts
│   │   └── userSlice.ts
│   ├── types/             # TypeScript interfaces
│   └── utils/             # Helper functions
├── mockup.html            # DESIGN REFERENCE - pixel-perfect mockup
└── GEMINI.md             # This context file
```

## Current Implementation Status

### ✅ Completed (Prompts 1-9)
- [x] Project structure and constants
- [x] Basic components (Card, CircularProgress, StatCard, Button)
- [x] Redux store setup with slices
- [x] Home screen with protein tracker
- [x] Expo Router navigation setup
- [x] TypeScript interfaces
- [x] Redux Store Setup
- [x] Workout, Stats, and Profile screens
- [x] Add entry modal functionality

### 🎯 Core Features to Build
1. **Protein Tracking**: Daily intake with circular progress (127g current in mockup)
2. **Workout Logging**: Exercise lists with completion status
3. **Progress Analytics**: Weight trends, streaks, statistics  
4. **Water Tracking**: Daily hydration goals
5. **Goal Management**: Customizable fitness targets

## Data Structure

### Sample Data (from mockup.html)
```typescript
// Current state shown in mockup
const mockData = {
  protein: { current: 127, goal: 200 }, // grams
  calories: { current: 1847, goal: 2500 },
  water: { current: 2.1, goal: 3.0 }, // liters
  workouts: { completed: 3, planned: 5 },
  goalProgress: 64, // percentage
  monthlyWeightChange: -2.3, // kg
  stats: {
    daysActive: 28,
    avgProtein: 156,
    workoutsThisMonth: 12,
    goalRate: 92 // percentage
  }
};
```

### Workout Structure
```typescript
interface Workout {
  name: string; // "Push Day"
  type: string; // "Upper Body Strength" 
  exercises: Exercise[];
}

interface Exercise {
  name: string; // "Bench Press"
  details: string; // "4 sets × 8-10 reps"
  completed: boolean;
}
```

## Design Guidelines

### Component Creation Rules
1. **Always reference mockup.html** for exact styling
2. **Use TypeScript interfaces** for all props and data
3. **Follow React Native best practices** (StyleSheet, not inline styles)
4. **Maintain accessibility** (proper labeling, contrast)
5. **Keep components simple** - no external UI libraries

### Styling Patterns
- **Cards**: Always use `backgroundColor: Colors.cardBackground`, `borderRadius: 16`, shadow
- **Typography**: Consistent hierarchy with proper font weights
- **Spacing**: Use multiples of 5px (5, 10, 15, 20px)
- **Touch targets**: Minimum 44px for buttons
- **Safe areas**: Always handle iPhone notch/home indicator

### Navigation Rules
- **File-based routing**: Use Expo Router conventions
- **Tab bar**: Custom component with floating + button
- **Screen transitions**: Native iOS/Android animations
- **Deep linking**: Support for future sharing features

## Development Guidelines

### When Adding New Features
1. **Check mockup.html first** - is this design already shown?
2. **Update relevant Redux slice** - don't add state randomly
3. **Create reusable components** - avoid code duplication  
4. **Test on both iOS and Android** - use Expo Go app
5. **Maintain TypeScript strict mode** - no `any` types

### Code Quality Standards
- **Component naming**: PascalCase, descriptive names
- **File organization**: Group related functionality
- **Import structure**: External libs → internal modules → relative imports
- **Error handling**: Always handle loading/error states
- **Performance**: Use React.memo for expensive components

## Common Prompts for Future Development

### For New Screens
"Create [screen name] following the design in mockup.html. Use existing components from src/components/, connect to Redux store, and maintain the established color palette and typography."

### For Components  
"Build a [component name] component matching the design shown in mockup.html section [X]. Follow the existing patterns in src/components/ and use TypeScript interfaces."

### For Features
"Implement [feature] using the data structure defined in GEMINI.md and the design from mockup.html. Integrate with existing Redux slices and maintain consistency with current components."

## Testing & Development

### Development Server
```bash
npx expo start
# Use Expo Go app on phone to preview
# Press 'i' for iOS simulator, 'a' for Android
```

### File Watching
All changes auto-reload via Metro bundler. No manual refresh needed.

### Debugging
- Console logs appear in terminal
- Use Expo DevTools for performance monitoring
- Flipper integration available for advanced debugging

---

**Remember**: Always reference `mockup.html` for design decisions and maintain consistency with the established architecture. This is a minimalist app - keep it simple and focused on core functionality.