import React from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { AppBar, AppBarContent } from './Themed';

export default function Header({ options }: BottomTabHeaderProps) {
  const { title, headerRight } = options;
  return (
    <AppBar>
      <AppBarContent title={title} />
      { headerRight && headerRight({})}
    </AppBar>
  );
}
