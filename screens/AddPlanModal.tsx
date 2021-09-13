import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IconButton, Text, useTheme } from 'react-native-paper';
import { RootStackParamList } from 'types';
import Icon from 'components/Icon';
import PlanForm from 'components/PlanForm';

type AddPlanModalProps = NativeStackScreenProps<RootStackParamList, 'AddPlanModal'>

export default function AddPlanModal({ navigation }: AddPlanModalProps) {
  const theme = useTheme();
  const styles = useStyles(theme);

  const onExitModal = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>New Plan</Text>
        <IconButton
          style={styles.exit}
          icon={(props) => <Icon name="times" {...props} />}
          onPress={onExitModal}
        />
      </View>
      <PlanForm />
    </View>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  exit: {
    position: 'absolute',
    right: 4,
  },
});
