
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addWater } from '../store/nutritionSlice';
import { Colors } from '@/constants/Colors';

interface WaterEntryFormProps {
  onClose: () => void;
}

const WaterEntryForm: React.FC<WaterEntryFormProps> = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAddWater = (value: number) => {
    dispatch(addWater(value));
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Water</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Liters of Water"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor={Colors.textLight}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddWater(0.25)}>
          <Text style={styles.presetButtonText}>+0.25L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddWater(0.5)}>
          <Text style={styles.presetButtonText}>+0.5L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddWater(1)}>
          <Text style={styles.presetButtonText}>+1L</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => handleAddWater(Number(amount))}
        disabled={!amount}
      >
        <Text style={styles.saveButtonText}>Add Entry</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  presetButton: {
    backgroundColor: Colors.accent,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  presetButtonText: {
    color: Colors.textDark,
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: Colors.textDark,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  saveButtonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WaterEntryForm;
