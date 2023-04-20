/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '..';
import {render, screen, fireEvent} from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);

    expect(screen.getByText('Test')).toBeDefined();
  });

  it('should press button', async () => {
    render(<App />);
    await fireEvent.press(screen.getByTestId('paymentButton'));

    expect(screen.getByTestId('paymentButton')).toBeDefined();
  });
});
