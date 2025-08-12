
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <Card style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  statCard: {
    padding: Layout.spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.textDark,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default StatCard;
