import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { AppBar, AppBarContent } from './Themed';

export default function Header(props: any) {
  const { route } = props;
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  return (
    <AppBar dark>
      <AppBarContent title={routeName} />
    </AppBar>
  );
}
