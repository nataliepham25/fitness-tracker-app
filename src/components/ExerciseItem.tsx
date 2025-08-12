
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

interface ExerciseItemProps {
  name: string;
  details: string;
  completed: boolean;
  onToggle: () => void;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ name, details, completed, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.exerciseDetails}>{details}</Text>
      </View>
      <View style={[styles.statusIndicator, completed && styles.completedIndicator]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafaf9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textDark,
  },
  exerciseDetails: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 5,
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
});

export default ExerciseItem;
