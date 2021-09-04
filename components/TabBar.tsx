import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BottomTabBarProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { SafeAreaView, Text, View } from './Themed';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const theme = useTheme();
  const activeColor = theme.colors.accent;
  const getLabel = (options: BottomTabNavigationOptions, routeName: string) => {
    const { tabBarLabel, title } = options;
    if (tabBarLabel) return tabBarLabel;
    if (title) return title;
    return routeName;
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = getLabel(options, route.name);
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate(route.name, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              {options.tabBarIcon && options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? activeColor : '#8f8f8f',
                size: 24,
              })}
              <Text style={{ color: isFocused ? activeColor : '#8f8f8f', textAlign: 'center' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
