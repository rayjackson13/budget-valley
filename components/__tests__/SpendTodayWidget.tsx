import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import SpendTodayWidget from '../SpendTodayWidget';

const mockProps = { fundsAvailable: 9999.99 };

it('renders correctly', async () => {
  const { queryByTestId } = render(<SpendTodayWidget {...mockProps} />);
  const availableFundsNode = queryByTestId('availableFunds');
  expect(availableFundsNode).not.toBe(null);
  const savedAmount = Number(availableFundsNode?.props.children[1]);
  expect(savedAmount).toBe(0);
  await waitFor(() => {
    const lateAvailableFunds = Number(availableFundsNode?.props.children[1]);
    expect(lateAvailableFunds).toBe(Math.floor(mockProps.fundsAvailable));
  });
});
