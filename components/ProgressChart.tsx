import React from 'react';
import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import Animated, { interpolate, multiply } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from './Themed';

type ProgressChartProps = {
  progress: number
  style: ViewStyle
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function ProgressChart({ progress, style }: ProgressChartProps) {
  const theme = useTheme();
  const size = 150;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const alpha = interpolate(progress, [0, 1], [Math.PI * 2, 0]);
  const strokeDashoffset = multiply(alpha, radius);

  return (
    <View style={[style, styles.wrap]}>
      <View style={[styles.inner, { width: size }]}>
        <Svg width={size} height={size}>
          <Circle
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={theme.colors.placeholder}
            opacity={0.1}
          />
          <AnimatedCircle
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={theme.colors.accent}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90) translate(-${size} 0)`}
            strokeLinecap="round"
          />
        </Svg>

        <View style={styles.iconWrap}>
          <FontAwesome5 size={52} color={theme.colors.text} name="calendar" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    flex: 1,
  },
  inner: {
    position: 'relative',
  },
  iconWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  },
});
