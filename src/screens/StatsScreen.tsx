import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BarChart from '../components/BarChart';
import StatCard from '../components/StatCard';
import { Colors } from '../constants/Colors';

const StatsScreen = () => {
  const { monthlyWeightChange, daysActive, avgProtein, workoutsThisMonth, goalRate } = useSelector(
    (state: RootState) => state.progress
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.metric}>{`${monthlyWeightChange} kg`}</Text>
        <Text style={styles.subtitle}>This Month</Text>
      </View>
      <BarChart />
      <View style={styles.statsGrid}>
        <StatCard label="Days Active" value={daysActive.toString()} />
        <StatCard label="Avg Protein" value={avgProtein.toString()} />
        <StatCard label="Workouts" value={workoutsThisMonth.toString()} />
        <StatCard label="Goal Rate" value={`${goalRate}%`} />
      </View>
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
    marginBottom: 40,
  },
  metric: {
    fontSize: 36,
    fontWeight: '300',
    color: Colors.textDark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textLight,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default StatsScreen;