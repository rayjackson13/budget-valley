import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Headline, Text, useTheme } from 'react-native-paper';
import CurrentPlanInfo from './CurrentPlanInfo';
import ProgressChart from './ProgressChart';
import { View } from './Themed';

export default function SavingsWidget() {
  const theme = useTheme();
  const styles = useStyles(theme);
  // TODO: Remove hard coded data.
  const saved = 219.63;
  const goal = 500;
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <ProgressChart progress={saved / goal} style={styles.chart} />
        <CurrentPlanInfo style={styles.plan} />
      </View>

      <Text>
        <Text style={styles.saved}>{`₽${saved.toFixed(2)}`}</Text>
        <Text style={styles.goal}>{` out of ₽${goal.toFixed(2)}`}</Text>
      </Text>

      <TouchableOpacity>
        <Headline style={styles.title}>
          <Text style={styles.secondary}>Current plan </Text>
          <FontAwesome5
            name="chevron-right"
            size={18}
            color={theme.colors.text}
            style={styles.icon}
          />
        </Headline>
      </TouchableOpacity>

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
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    margin: 0,
    padding: 0,
    top: 0,
    marginBottom: 30,
  },
  accent: {
    fontWeight: 'bold',
    color: colors.accent,
  },
  secondary: {
    color: colors.text,
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
});
