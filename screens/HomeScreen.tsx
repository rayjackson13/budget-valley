import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, useTheme } from 'react-native-paper';
import { SafeAreaView, View } from 'components/Themed';
import SavingsWidget from 'components/SavingsWidget';

export default function HomeScreen() {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.title} selectionColor={theme.colors.accent}>Budget Valley</Text>

      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          Here you will find the tips on how to spend money efficiently and save funds gradually.
          Also here you'll see how much money you've saved over a certain period of time.
        </Text>
      </View> */}

        <SavingsWidget />
      </ScrollView>
    </SafeAreaView>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 30,
  },
  title: {
    margin: 0,
    padding: 0,
    top: 0,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: theme.colors.accent,
  },
  getStartedText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
  },
});
