import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Icon(props: React.ComponentProps<typeof FontAwesome5>) {
  return <FontAwesome5 {...props} />;
}
