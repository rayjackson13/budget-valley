import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackScreenProps } from 'types';

export default function CustomizePlanScreen({ route }: RootStackScreenProps<'CustomizePlan'>) {
  console.log(route.params);
  return (
    <SafeAreaView edges={['top', 'left', 'right']} />
  );
}
