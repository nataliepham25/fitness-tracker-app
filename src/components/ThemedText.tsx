
import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemedTextProps {
  children: React.ReactNode;
  type?: 'heading' | 'subheading' | 'body' | 'caption' | 'statNumber' | 'statLabel' | 'proteinAmount' | 'proteinUnit' | 'workoutTitle' | 'workoutSubtitle' | 'exerciseName' | 'exerciseDetails' | 'progressMetric' | 'profileName' | 'profileSubtitle' | 'menuText' | 'navLabel' | 'screenTitle';
  colorVariant?: 'dark' | 'light' | 'accent';
  style?: StyleProp<TextStyle>;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  children,
  type = 'body',
  colorVariant = 'dark',
  style,
}) => {
  const textStyles = [
    styles.baseText,
    styles[type],
    colorVariant === 'dark' && styles.darkText,
    colorVariant === 'light' && styles.lightText,
    colorVariant === 'accent' && styles.accentText,
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif',
  },
  // Typography styles based on HTML mockup
  screenTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  proteinAmount: {
    fontSize: 48,
    fontWeight: '300',
  },
  proteinUnit: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '500',
  },
  statLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  workoutTitle: {
    fontSize: 24,
    fontWeight: '300',
  },
  workoutSubtitle: {
    fontSize: 14,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseDetails: {
    fontSize: 14,
  },
  progressMetric: {
    fontSize: 36,
    fontWeight: '300',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '500',
  },
  profileSubtitle: {
    fontSize: 14,
  },
  menuText: {
    fontSize: 16,
  },
  navLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // General typography types
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  // Color variants
  darkText: {
    color: Colors.textDark,
  },
  lightText: {
    color: Colors.textLight,
  },
  accentText: {
    color: Colors.accentBeige,
  },
});

export default ThemedText;
