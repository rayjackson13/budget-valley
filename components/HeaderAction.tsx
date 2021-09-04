import React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

/* eslint-disable no-unused-vars */
type HeaderActionProps = {
  onPress: (event?: GestureResponderEvent) => void
  icon: IconSource
}
/* eslint-enable no-unused-vars */

export default function HeaderAction({ onPress, icon }: HeaderActionProps) {
  const theme = useTheme();
  return (
    <Appbar.Action
      icon={icon}
      color={theme.colors.accent}
      size={30}
      onPress={onPress}
      style={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
