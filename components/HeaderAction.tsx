import React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

/* eslint-disable no-unused-vars */
type HeaderActionProps = {
  onPress: (event?: GestureResponderEvent) => void
  icon: IconSource
  position?: 'left' | 'right'
}
/* eslint-enable no-unused-vars */

export default function HeaderAction({ onPress, icon, position = 'right' }: HeaderActionProps) {
  const theme = useTheme();
  return (
    <Appbar.Action
      icon={icon}
      color={theme.colors.accent}
      size={20}
      onPress={onPress}
      style={[styles.button, position === 'left' && styles.buttonLeft]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonLeft: {
    left: 12,
  },
});
