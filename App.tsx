import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor="#ff0000" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
