/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import { Platform, Text as DefaultText, View as DefaultView } from 'react-native';
import { Appbar as DefaultAppBar, useTheme } from 'react-native-paper';
import { SafeAreaView as SafeArea, useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { lightColor, darkColor, ...otherProps } = props;

  return <DefaultText {...otherProps} />;
}

export function View(props: ViewProps) {
  const { lightColor, darkColor, ...otherProps } = props;

  return <DefaultView {...otherProps} />;
}

export function SafeAreaView(props: ViewProps) {
  const { lightColor, darkColor, ...otherProps } = props;

  return <SafeArea {...otherProps} />;
}

export function AppBar(props: React.ComponentProps<typeof DefaultAppBar>) {
  const { children, style, ...otherProps } = props;
  const theme = useTheme();
  const backgroundColor = theme.colors.background;
  const height = useSafeAreaInsets().top;

  return (
    <DefaultAppBar.Header
      style={[{ backgroundColor, elevation: 2, zIndex: 9, position: 'relative' }, style]}
      statusBarHeight={height}
      {...otherProps}
    >
      {children}
    </DefaultAppBar.Header>
  );
}

export function AppBarContent(props: ThemeProps & React.ComponentProps<typeof DefaultAppBar.Content>) {
  const { titleStyle, ...otherProps } = props;
  const theme = useTheme();
  const color = theme.colors.text;

  return (
    <DefaultAppBar.Content
      titleStyle={[
        { fontSize: Platform.OS === 'ios' ? 20 : 20, fontWeight: 'bold', color, textAlign: 'center' },
        titleStyle,
      ]}
      {...otherProps}
    />
  );
}
