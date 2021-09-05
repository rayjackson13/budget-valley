import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import CurrentPlanInfo from './CurrentPlanInfo';
import ProgressChart from './ProgressChart';
import Counter from './Counter';

type SavingsWidgetProps = {
  style?: ViewStyle
}

export default function SavingsWidget({ style }: SavingsWidgetProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  // TODO: Remove hard coded data.
  const saved = Math.floor(316.86);
  const goal = Math.floor(500);
  const progress = saved / goal > 1 ? 1 : saved / goal;

  return (
    <View style={[styles.wrap, style]}>
      <View style={styles.row}>
        <ProgressChart progress={progress} style={styles.chart} />
        <CurrentPlanInfo style={styles.plan} />
      </View>

      <Text style={{ marginBottom: 15 }}>
        <Text style={styles.saved}>
          <Counter value={saved} prefix="₽" style={styles.saved} />
        </Text>
        <Text style={styles.goal}>{` out of ₽${goal}`}</Text>
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
