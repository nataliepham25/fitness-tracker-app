
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import ProteinEntryForm from './ProteinEntryForm';
import WaterEntryForm from './WaterEntryForm';
import QuickWorkoutForm from './QuickWorkoutForm';

interface AddEntryModalProps {
  isVisible: boolean;
  onClose: () => void;
}

type FormType = 'main' | 'protein' | 'water' | 'workout';

const AddEntryModal: React.FC<AddEntryModalProps> = ({ isVisible, onClose }) => {
  const [currentForm, setCurrentForm] = useState<FormType>('main');

  const handleClose = () => {
    setCurrentForm('main');
    onClose();
  };

  const renderForm = () => {
    switch (currentForm) {
      case 'protein':
        return <ProteinEntryForm onClose={handleClose} />;
      case 'water':
        return <WaterEntryForm onClose={handleClose} />;
      case 'workout':
        return <QuickWorkoutForm onClose={handleClose} />;
      case 'main':
      default:
        return (
          <View style={styles.mainMenu}>
            <TouchableOpacity style={styles.menuOption} onPress={() => setCurrentForm('protein')}>
              <Text style={styles.menuOptionText}>Add Protein</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuOption} onPress={() => setCurrentForm('water')}>
              <Text style={styles.menuOptionText}>Add Water</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuOption} onPress={() => setCurrentForm('workout')}>
              <Text style={styles.menuOptionText}>Quick Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {renderForm()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  mainMenu: {
    width: '100%',
  },
  menuOption: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 18,
    color: Colors.textDark,
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: Colors.accent,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 18,
    color: Colors.textDark,
    fontWeight: '500',
  },
});

export default AddEntryModal;
