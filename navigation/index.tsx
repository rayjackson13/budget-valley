import * as React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import Header from 'components/Header';
import TabBar from 'components/TabBar';
import TabBarIcon from 'components/TabBarIcon';
import HeaderAction from 'components/HeaderAction';
import ModalScreen from 'screens/ModalScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import HomeScreen from 'screens/HomeScreen';
import FinanceScreen from 'screens/FinanceScreen';
import { RootStackParamList, RootTabParamList } from 'types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ theme }: { theme?: Theme }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{
        header: (props: BottomTabHeaderProps) => <Header {...props} />,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Finance"
        component={FinanceScreen}
        options={() => ({
          title: 'Finance',
          tabBarIcon: ({ color }) => <TabBarIcon name="money-bill-wave-alt" color={color} />,
          headerRight: () => <HeaderAction onPress={() => alert('create!')} icon="plus" />,
        })}
      />
    </BottomTab.Navigator>
  );
}
