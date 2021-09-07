import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'components/Icon';

export default function FinanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.empty}>
        <Title style={styles.emptyTitle}>
          No plans, yet
        </Title>
        <Paragraph style={styles.emptyText}>
          To create one, press the
          {'  '}
          <Icon name="plus" />
          {'  '}
          icon
          {'\n'}
          at the top right corner of the screen.
        </Paragraph>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  emptyTitle: {
    fontSize: 28,
    lineHeight: 36,
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
  },
});
