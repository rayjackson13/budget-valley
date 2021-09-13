import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';
import SavingsWidget from '../SavingsWidget';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const mockProps = { saved: 316.86, goal: 529.99991 };

it('renders correctly', () => {
  const tree = renderer.create(<SavingsWidget {...mockProps} />).toJSON();
  expect(tree).not.toBe(null);
});

it('shows correct data', async () => {
  const { queryByTestId } = render(<SavingsWidget {...mockProps} />);
  const savedCounterNode = queryByTestId('savedCounter');
  const totalTextNode = queryByTestId('totalText');
  expect(savedCounterNode).not.toBe(null);
  const savedAmount = Number(savedCounterNode?.props.children[1]);
  const goalString = totalTextNode?.props.children;
  expect(savedAmount).toBe(0);
  expect(goalString).toMatch(Math.floor(mockProps.goal).toString());
  await waitFor(() => {
    const lateSavedAmount = Number(savedCounterNode?.props.children[1]);
    expect(lateSavedAmount).toBe(Math.floor(mockProps.saved));
  });
});
