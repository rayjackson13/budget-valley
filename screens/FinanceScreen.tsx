import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, View } from 'components/Themed';

export default function FinanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
