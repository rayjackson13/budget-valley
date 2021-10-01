import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

import Counter from './Counter';
import CurrentPlanInfo from './CurrentPlanInfo';
import ProgressChart from './ProgressChart';

type SavingsWidgetProps = {
  style?: ViewStyle
  saved: number
  goal: number
}

const getProgress = (saved: number, goal: number) => {
  if (!goal) return 1;
  return saved / goal > 1 ? 1 : saved / goal;
};

export default function SavingsWidget({ style, saved = 0, goal = 0 }: SavingsWidgetProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const savedAmount = Math.floor(saved);
  const desiredAmount = Math.floor(goal);
  const progress = getProgress(savedAmount, desiredAmount);

  return (
    <View style={[styles.wrap, style]}>
      <View style={styles.row}>
        <ProgressChart progress={progress} style={styles.chart} />
        <CurrentPlanInfo style={styles.plan} />
      </View>

      <Text style={{ marginBottom: 15 }}>
        <Text style={styles.saved}>
          <Counter value={savedAmount} prefix="₽" style={styles.saved} testID="savedCounter" />
        </Text>
        <Text style={styles.goal} testID="totalText">{` out of ₽${desiredAmount}`}</Text>
      </Text>

      <Button
        mode="contained"
        color={theme.colors.darkGrey}
        style={styles.button}
        theme={theme}
        onPress={() => console.log('nav to plan')}
      >
        <Text style={styles.buttonText}>Current plan </Text>
        <FontAwesome5
          name="chevron-right"
          size={16}
          color={theme.colors.text}
          style={styles.icon}
        />
      </Button>

    </View>
  );
}

const useStyles = ({ colors }: ReactNativePaper.Theme) => StyleSheet.create({
  wrap: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingRight: 20,
  },
  accent: {
    fontWeight: 'bold',
    color: colors.accent,
  },
  icon: {
    marginLeft: 10,
  },
  chart: {
    flex: 1,
    flexShrink: 0,
  },
  plan: {
    flex: 1,
    flexShrink: 0,
  },
  saved: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.accent,
  },
  goal: {
    fontSize: 20,
    color: colors.placeholder,
  },
  button: {
    paddingVertical: 4,
  },
  buttonText: {
    fontSize: 18,
    letterSpacing: 0,
  },
});
