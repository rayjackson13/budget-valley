import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Title } from 'react-native-paper';

import type { UserData } from '.';

type WelcomeTextPropsType = {
  user: UserData;
  theme: ReactNativePaper.Theme;
}

const GREETINGS = 'Welcome back';

export default function WelcomeText({ user, theme }: WelcomeTextPropsType) {
  const styles = useStyles(theme);
  if (!user || !user.name) {
    return (
      <Title style={styles.title}>
        {GREETINGS}
        !
      </Title>
    );
  }

  return (
    <Title style={styles.title}>
      {`${GREETINGS}, `}
      <Text style={styles.accent} testID="username">{user.name}</Text>
      !
    </Title>
  );
}

const useStyles = ({ colors }: ReactNativePaper.Theme) => StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  accent: {
    color: colors.accent,
    fontWeight: 'bold',
  },
});
