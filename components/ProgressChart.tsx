import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

type ProgressChartProps = {
  progress: number
  style: ViewStyle
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome5);

export default function ProgressChart({ progress, style }: ProgressChartProps) {
  const theme = useTheme();
  const size = 150;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const perimeter = radius * Math.PI * 2;
  const strokeDashoffset = perimeter - perimeter * progress;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const flowAnim = useRef(new Animated.Value(perimeter)).current;
  const iconFadeOutAnim = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const iconRotateAnim = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const flowInAnimation = () => {
    Animated.timing(flowAnim, {
      easing: progress < 1
        ? Easing.bezier(0.34, 1.56, 0.64, 1)
        : Easing.bezier(0.22, 1, 0.36, 1),
      toValue: strokeDashoffset,
      duration: progress < 1 ? 600 : 1500,
      useNativeDriver: true,
    }).start();
  };

  const progressAnimation = () => {
    Animated.timing(progressAnim, {
      easing: Easing.linear,
      toValue: progress,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    flowInAnimation();
    progressAnimation();
  }, [progress]);

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
            transform={`rotate(-90) translate(-${size} 0)`}
            strokeDashoffset={flowAnim}
            strokeLinecap="round"
          />
        </Svg>

        <View style={styles.iconWrap}>
          <AnimatedIcon
            size={52}
            color={theme.colors.text}
            name="calendar"
            style={[progress >= 1 && { opacity: iconFadeOutAnim, transform: [{ rotate: iconRotateAnim }] }]}
          />
        </View>

        {progress >= 1 && (
          <View style={styles.iconWrap}>
            <AnimatedIcon
              size={52}
              color={theme.colors.accent}
              name="check"
              style={[{ opacity: progressAnim, transform: [{ rotate: iconRotateAnim }] }]}
            />
          </View>
        )}
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
  fillIcon: {

  },
});
