import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '@/constants/Colors';

interface BarChartProps {
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartHeight = 200;
  const barWidth = 20;
  const spacing = 15; // Space between bars
  const totalBarWidth = data.length * barWidth + (data.length - 1) * spacing;

  return (
    <View style={styles.container}>
      <Svg height={chartHeight} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={Colors.textDark} stopOpacity="1" />
            <Stop offset="1" stopColor="#666" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        {data.map((value, index) => (
          <Rect
            key={index}
            x={index * (barWidth + spacing)}
            y={chartHeight - chartHeight * value}
            width={barWidth}
            height={chartHeight * value}
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
    height: 200,
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