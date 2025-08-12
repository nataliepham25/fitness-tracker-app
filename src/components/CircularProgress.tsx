
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

interface CircularProgressProps {
  amount: number;
  unit: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ amount, unit }) => {
  return (
    <LinearGradient
      colors={['#f8f6f3', '#e8e5e1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.proteinCircle}
    >
      <View style={styles.innerShadow}>
        <Text style={styles.proteinAmount}>{amount}</Text>
        <Text style={styles.proteinUnit}>{unit}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  proteinCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    // Inset shadow approximation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // For Android
  },
  innerShadow: {
    width: 190, // Slightly smaller to give inset effect
    height: 190,
    borderRadius: 95,
    backgroundColor: 'transparent', // Or a slightly darker shade if needed
    justifyContent: 'center',
    alignItems: 'center',
    // This is a common way to simulate inset shadow in RN, though not perfect
    // You might need a dedicated library for perfect inset shadows
    borderWidth: 10,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  proteinAmount: {
    fontSize: 48,
    fontWeight: '300',
    color: Colors.textDark,
    marginBottom: 5,
  },
  proteinUnit: {
    fontSize: 14,
    color: Colors.textLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default CircularProgress;
