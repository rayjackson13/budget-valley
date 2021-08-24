import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import React from 'react';
import { AppBar, AppBarContent } from './Themed';

export default function Header(props: any) {
  console.log(props);
  const { route } = props;
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  return (
    <AppBar dark>
      <AppBarContent title={routeName} />
    </AppBar>
  )
}