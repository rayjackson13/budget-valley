import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import ProfileImage from 'assets/images/profile-default.jpeg';
import ProfileBar from '../ProfileBar';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const mockUser = { image: ProfileImage, name: 'Kostya' };

it('renders correctly', () => {
  const tree = renderer.create(<ProfileBar user={mockUser} />).toJSON();
  expect(tree).not.toBe(null);
});

it('shows current profile', () => {
  const { queryByTestId, toJSON } = render(<ProfileBar user={mockUser} />);
  const userNameNode = queryByTestId('username');
  expect(userNameNode).not.toBe(null);
  expect(userNameNode?.props.children).toBe(mockUser.name);
  expect(toJSON()).toMatchSnapshot();
});
