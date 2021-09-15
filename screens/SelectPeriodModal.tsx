import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IconButton, Text, useTheme } from 'react-native-paper';
import { RootStackParamList } from 'types';
import Icon from 'components/Icon';
import SelectPeriodForm from 'components/SelectPeriodForm';
import { SafeAreaView } from 'react-native-safe-area-context';

type SelectPeriodModalProps = NativeStackScreenProps<RootStackParamList, 'AddPlanModal'>

export default function SelectPeriodModal({ navigation }: SelectPeriodModalProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [title, setTitle] = useState('New Plan');

  const onExitModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <BlurView style={styles.blurWrap} intensity={95} tint="dark" />
      <SafeAreaView edges={['bottom']} style={styles.wrap}>
        <View style={styles.head}>
          <Text style={styles.title}>{title}</Text>
          <IconButton
            style={styles.exit}
            color={theme.colors.accent}
            size={22}
            icon={(props) => <Icon name="times" {...props} />}
            onPress={onExitModal}
          />
        </View>
        <SelectPeriodForm
          setTitle={setTitle}
          title={title}
          navigation={navigation}
        />
      </SafeAreaView>
    </View>
  );
}

const useStyles = ({ colors, roundness }: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  blurWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderTopStartRadius: roundness * 2,
    borderTopEndRadius: roundness * 2,
  },
  background: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderTopStartRadius: roundness * 2,
    borderTopEndRadius: roundness * 2,
    backgroundColor: colors.backdrop,
    opacity: 0.5,
  },
  wrap: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  head: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 30,
  },
  exit: {
    position: 'absolute',
    right: 16,
    top: 21,
  },
});
