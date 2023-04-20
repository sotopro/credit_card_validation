/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, screen} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText} = render(<App />);

  expect(screen.getByText('Test')).toBeDefined();
});
