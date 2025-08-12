
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { startWorkout, completeExercise, finishWorkout } from '../store/workoutsSlice';
import { Colors } from '@/constants/Colors';

interface QuickWorkoutFormProps {
  onClose: () => void;
}

const QuickWorkoutForm: React.FC<QuickWorkoutFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { workoutPlans, currentWorkout } = useSelector((state: RootState) => state.workouts);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const handleStartWorkout = () => {
    if (selectedWorkout) {
      const workout = workoutPlans.find((plan) => plan.name === selectedWorkout);
      if (workout) {
        dispatch(startWorkout(workout));
      }
    }
  };

  const handleToggleExercise = (exerciseName: string) => {
    dispatch(completeExercise(exerciseName));
  };

  const handleFinishWorkout = () => {
    dispatch(finishWorkout());
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Workout</Text>

      {!currentWorkout ? (
        <View>
          <Text style={styles.label}>Select a workout plan:</Text>
          <FlatList
            data={workoutPlans}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.workoutPlanButton, selectedWorkout === item.name && styles.selectedWorkoutPlanButton]}
                onPress={() => setSelectedWorkout(item.name)}
              >
                <Text style={styles.workoutPlanButtonText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartWorkout}
            disabled={!selectedWorkout}
          >
            <Text style={styles.startButtonText}>Start Workout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.currentWorkoutTitle}>{currentWorkout.name}</Text>
          <FlatList
            data={currentWorkout.exercises}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.exerciseItem}
                onPress={() => handleToggleExercise(item.name)}
              >
                <Text style={styles.exerciseName}>{item.name}</Text>
                <View style={[styles.statusIndicator, item.completed && styles.completedIndicator]} />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.finishButton} onPress={handleFinishWorkout}>
            <Text style={styles.finishButtonText}>Finish Workout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.textDark,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: 10,
  },
  workoutPlanButton: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedWorkoutPlanButton: {
    backgroundColor: Colors.accent,
  },
  workoutPlanButtonText: {
    color: Colors.textDark,
    fontSize: 16,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: Colors.textDark,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  currentWorkoutTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textDark,
    marginBottom: 15,
    textAlign: 'center',
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 16,
    color: Colors.textDark,
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e8e5e1',
    borderWidth: 2,
    borderColor: '#d1cec9',
  },
  completedIndicator: {
    backgroundColor: Colors.textDark,
    borderColor: Colors.textDark,
  },
  finishButton: {
    backgroundColor: Colors.textDark,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  finishButtonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default QuickWorkoutForm;
