import React, { useCallback, useState } from 'react';
import { RefreshControl, StyleSheet, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { Banner, useTheme } from 'react-native-paper';
import SavingsWidget from 'components/SavingsWidget';
import SpendTodayWidget from 'components/SpendTodayWidget';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileBar from 'components/ProfileBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const theme = useTheme();
  const styles = useStyles(theme);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.screen}>
      {/* TODO: move banner to a separate component. */}
      <Banner
        visible={bannerVisible}
        actions={[{
          label: 'Got it',
          onPress: () => setBannerVisible(false),
        }]}
        icon={({ size }) => <FontAwesome5 color={theme.colors.text} size={size} name="info-circle" />}
      >
        Here you will find the tips on how to spend money efficiently and save funds gradually.
        Also here you'll see how much money you've saved over a certain period of time.
      </Banner>
      <ScrollView
        style={styles.container}
        contentInset={{ bottom: 40 }}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
            colors={['#fff']}
          />
      )}
      >
        <ProfileBar style={{ marginBottom: 30 }} />
        <SavingsWidget style={{ marginBottom: 30 }} />
        <SpendTodayWidget fundsAvailable={1811} />
      </ScrollView>
    </SafeAreaView>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 0,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
    padding: 30,
    paddingBottom: 0,
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
