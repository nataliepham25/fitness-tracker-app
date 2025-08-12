
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '../constants/Colors';

const barHeights = [0.6, 0.4, 0.8, 0.65, 0.9, 0.75, 0.95];
const barWidth = 20;
const chartHeight = 200;

const BarChart = () => {
  return (
    <View style={styles.container}>
      <Svg height={chartHeight} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={Colors.textDark} stopOpacity="1" />
            <Stop offset="1" stopColor="#666" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        {barHeights.map((height, index) => (
          <Rect
            key={index}
            x={(barWidth + 15) * index}
            y={chartHeight - chartHeight * height}
            width={barWidth}
            height={chartHeight * height}
            fill="url(#grad)"
            rx={4}
            ry={4}
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafaf9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    height: chartHeight,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default BarChart;
