import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';

import Icon from 'components/Icon';
import Header from 'components/Header';
import TabBar from 'components/TabBar';
import TabBarIcon from 'components/TabBarIcon';
import HeaderAction from 'components/HeaderAction';
import AddPlanModal from 'screens/SelectPeriodModal';
import CustomizePlanScreen from 'screens/CustomizePlanScreen';
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
        <Stack.Screen
          name="AddPlanModal"
          component={AddPlanModal}
          options={{
            gestureEnabled: false,
            cardStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          header: (props: StackHeaderProps) => <Header {...props} />,
        }}
      >
        <Stack.Screen
          name="CustomizePlan"
          component={CustomizePlanScreen}
          options={({ navigation }) => ({
            title: 'New Plan',
            headerLeft: () => (
              <HeaderAction
                position="left"
                onPress={() => navigation.pop()}
                icon={(props) => <Icon name="chevron-left" {...props} />}
              />
            ),
          })}
        />
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
        unmountOnBlur: true,
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
        options={({ navigation }) => ({
          title: 'Finance',
          tabBarIcon: ({ color }) => <TabBarIcon name="money-bill-wave-alt" color={color} />,
          headerRight: () => (
            <HeaderAction
              onPress={() => navigation.navigate('AddPlanModal')}
              icon={(props) => <Icon name="plus" {...props} />}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}
