import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from './Themed';

type CurrentPlanInfoProps = {
  style: ViewStyle
}

export default function CurrentPlanInfo({ style }: CurrentPlanInfoProps) {
  const total = 14;
  return (
    <View style={[styles.wrap, style]}>
      <Text style={styles.mark}>
        Current Plan:
      </Text>
      <View style={styles.row}>
        <Text style={styles.text}>
          Day
          {' '}
          <Text style={styles.current}>9</Text>
        </Text>
        <Text style={[styles.text, styles.total]}>{` / ${total}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-end',
  },
  mark: {
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 12,
  },
  text: {
    fontSize: 32,
  },
  current: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8a2be2',
  },
  total: {
    marginTop: 8,
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
  },
});
