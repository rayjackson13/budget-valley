import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useCountUp } from 'use-count-up';

type CounterProps = {
  value: number
  duration?: number
  style: TextStyle
  prefix?: string
}

export default function Counter({ value, duration = 1000, style, prefix }: CounterProps) {
  const { value: count } = useCountUp({
    isCounting: true,
    end: value,
    duration: duration / 1000,
    easing: 'easeOutCubic',
  });
  return (
    <Text style={style}>
      {prefix}
      {count}
    </Text>
  );
}
