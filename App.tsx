/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { DarkTheme as NavDarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import merge from 'deepmerge';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

/* eslint-disable no-unused-vars */
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      accentAlt: string;
    }
  }
}
/* eslint-enable no-unused-vars */

const darkTheme = merge(DarkTheme, NavDarkTheme);
const theme = merge(darkTheme, {
  roundness: 16,
  dark: true,
  colors: {
    surface: '#14110F',
    accent: '#FFC812',
    accentAlt: '#8a2be2',
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation theme={theme} />
        <StatusBar backgroundColor="#ff0000" translucent style="light" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
