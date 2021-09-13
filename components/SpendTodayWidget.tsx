import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Counter from './Counter';

type SpendTodayWidgetProps = {
  style?: ViewStyle | ViewStyle[]
  fundsAvailable?: number
}

export default function SpendTodayWidget({ style, fundsAvailable = 0 }: SpendTodayWidgetProps) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const opacityAnimation = () => {
    Animated.timing(opacity, {
      useNativeDriver: false,
      duration: 300,
      toValue: 1,
    }).start();
  };

  useEffect(() => {
    opacityAnimation();
  }, []);

  return (
    <Animated.View style={[styles.wrap, style, { opacity, transform: [{ translateY }] }]}>
      <Text style={styles.text}>Today you can spend up to:</Text>
      <Counter
        duration={2000}
        value={Math.floor(fundsAvailable)}
        prefix="₽"
        style={[styles.text, styles.accent]}
        testID="availableFunds"
      />
    </Animated.View>
  );
}

const getStyles = ({ colors }: ReactNativePaper.Theme) => StyleSheet.create({
  wrap: {
    padding: 15,
    borderRadius: 16,
    elevation: 0,
    backgroundColor: colors.darkGrey,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  accent: {
    color: colors.accent,
    fontSize: 48,
  },
});
