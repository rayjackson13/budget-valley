import React from 'react';
import { Appbar as DefaultAppBar, useTheme } from 'react-native-paper';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { StackHeaderProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

type AppBarContentProps = React.ComponentProps<typeof DefaultAppBar.Content> & {
  theme: ReactNativePaper.Theme
}

function AppBarContent({ theme, ...otherProps }: AppBarContentProps) {
  const color = theme.colors.text;
  return <DefaultAppBar.Content titleStyle={[styles.content, { color }]} {...otherProps} />;
}

export default function Header({ options }: BottomTabHeaderProps | StackHeaderProps) {
  const { title, headerRight, headerLeft } = options;
  const theme = useTheme();
  const backgroundColor = theme.colors.background;
  return (
    <DefaultAppBar.Header style={[styles.header, { backgroundColor }]}>
      { headerLeft && headerLeft({})}
      <AppBarContent title={title} theme={theme} />
      { headerRight && headerRight({})}
    </DefaultAppBar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    elevation: 2,
    zIndex: 9,
    position: 'relative',
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
