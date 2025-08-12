
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProtein } from '../store/nutritionSlice';
import { Colors } from '@/constants/Colors';

interface ProteinEntryFormProps {
  onClose: () => void;
}

const ProteinEntryForm: React.FC<ProteinEntryFormProps> = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAddProtein = (value: number) => {
    dispatch(addProtein(value));
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Protein</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Grams of Protein"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor={Colors.textLight}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddProtein(25)}>
          <Text style={styles.presetButtonText}>+25g</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddProtein(50)}>
          <Text style={styles.presetButtonText}>+50g</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.presetButton} onPress={() => handleAddProtein(100)}>
          <Text style={styles.presetButtonText}>+100g</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => handleAddProtein(Number(amount))}
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

export default ProteinEntryForm;
