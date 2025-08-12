import React from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { completeExercise } from '../store/workoutsSlice';
import ExerciseItem from '../components/ExerciseItem';
import { Colors } from '@/constants/Colors';

const WorkoutsScreen = () => {
  const dispatch = useDispatch();
  const { todaysWorkout } = useSelector((state: RootState) => state.workouts);

  const handleToggleCompletion = (exerciseName: string) => {
    dispatch(completeExercise(exerciseName));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{todaysWorkout?.name}</Text>
        <Text style={styles.subtitle}>{todaysWorkout?.type}</Text>
      </View>
      <FlatList
        data={todaysWorkout?.exercises}
        renderItem={({ item }) => (
          <ExerciseItem
            name={item.name}
            details={item.details}
            completed={item.completed}
            onToggle={() => handleToggleCompletion(item.name)}
          />
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    color: Colors.textDark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textLight,
  },
});

export default WorkoutsScreen;