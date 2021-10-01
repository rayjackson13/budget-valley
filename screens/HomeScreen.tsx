import { FontAwesome5 } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { RefreshControl, StyleSheet, ScrollView } from 'react-native';
import { Banner, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfileBar from 'components/ProfileBar';
import SavingsWidget from 'components/SavingsWidget';
import SpendTodayWidget from 'components/SpendTodayWidget';

const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

function BannerIcon({ size }: { size: number }) {
  const { colors } = useTheme();
  return (
    <FontAwesome5 color={colors.text} size={size} name="info-circle" />
  );
}

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const theme = useTheme();
  const styles = useStyles(theme);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const userData = null;

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.screen}>
      <Banner
        visible={bannerVisible}
        actions={[{
          label: 'Got it',
          onPress: () => setBannerVisible(false),
        }]}
        icon={BannerIcon}
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
        <ProfileBar user={userData} style={{ marginBottom: 30 }} />
        <SavingsWidget saved={0} goal={0} style={{ marginBottom: 30 }} />
        <SpendTodayWidget fundsAvailable={0} />
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
