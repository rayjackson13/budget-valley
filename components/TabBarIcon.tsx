import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string; }) {
  return <FontAwesome5 size={24} style={{ marginBottom: 5, textAlign: 'center' }} {...props} />;
}
