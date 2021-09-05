import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ProgressBar, Text, useTheme } from 'react-native-paper';

type CurrentPlanInfoProps = {
  style: ViewStyle
}

export default function CurrentPlanInfo({ style }: CurrentPlanInfoProps) {
  const theme = useTheme();
  const styles = getStyles(theme);
  // TODO: remove hard coded data.
  const current = 9;
  const total = 14;
  return (
    <View style={[styles.wrap, style]}>
      <Text style={styles.mark}>
        Current Plan:
      </Text>
      <View>
        <View style={styles.dayProgressWrap}>
          <Text style={styles.text}>
            Day
            {' '}
            <Text style={styles.current}>{current}</Text>
            <Text style={styles.text}>{` / ${total}`}</Text>
          </Text>
        </View>
        <View style={styles.progressBarWrap}>
          <View style={styles.progressBarInner}>
            <ProgressBar
              progress={current / total}
              style={styles.progressBar}
              color={theme.colors.text}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const getStyles = ({ colors }: ReactNativePaper.Theme) => StyleSheet.create({
  wrap: {
    paddingVertical: 20,
    width: '100%',
  },
  mark: {
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 0,
  },
  text: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  current: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.accentAlt,
  },
  dayProgressWrap: {
    alignItems: 'center',
  },
  progressBarWrap: {
    marginTop: 4,
    width: '100%',
    alignItems: 'center',
  },
  progressBarInner: {
    width: '70%',
  },
  progressBar: {
    width: '100%',
  },
});
