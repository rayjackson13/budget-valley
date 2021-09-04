import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, View } from 'components/Themed';

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Budget Valley</Text>

        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Here you will find the tips on how to spend money efficiently and save funds gradually.
            Also here you'll see how much money you've saved over a certain period of time.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
