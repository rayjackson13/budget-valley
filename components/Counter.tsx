import React from 'react';
import { Animated, TextStyle } from 'react-native';
import { useCountUp } from 'use-count-up';

type CounterProps = {
  value: number
  duration?: number
  style: TextStyle | TextStyle[]
  prefix?: string
  testID?: string
}

export default function Counter({ value, duration = 1000, style, prefix, testID }: CounterProps) {
  const { value: count } = useCountUp({
    isCounting: true,
    end: value,
    duration: duration / 1000,
    easing: 'easeOutCubic',
  });

  return (
    <Animated.Text style={style} testID={testID}>
      {prefix}
      {count}
    </Animated.Text>
  );
}
