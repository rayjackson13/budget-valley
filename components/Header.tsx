import React from 'react';
import { AppBar, AppBarContent } from './Themed';

export default function Header(props: any) {
  console.log(props);
  const { route } = props;
  return (
    <AppBar dark>
      <AppBarContent title={route.name} />
    </AppBar>
  )
}