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

    expect(screen.getByTestId('cardNumberInput')).toBeTruthy();
  });

  it('should change the card number', () => {
    render(<App />);

    const cardNumberInput = screen.getByTestId('cardNumberInput');
    fireEvent.changeText(cardNumberInput, '1234 5678 9012 3456');

    expect(cardNumberInput.props.value).toBe('1234 5678 9012 3456');
  });

  it('should change the expiration date', () => {
    render(<App />);

    const expirationDateInput = screen.getByTestId('expirationDateInput');
    fireEvent.changeText(expirationDateInput, '12/22');

    expect(expirationDateInput.props.value).toBe('12/22');
  });

  it('should change the cvv', () => {
    render(<App />);

    const cvvInput = screen.getByTestId('cvvInput');
    fireEvent.changeText(cvvInput, '123');

    expect(cvvInput.props.value).toBe('123');
  });

  it('should change the first Name', () => {
    render(<App />);

    const firstNameInput = screen.getByTestId('firstNameInput');
    fireEvent.changeText(firstNameInput, 'John');

    expect(firstNameInput.props.value).toBe('John');
  });

  it('should change the last Name', () => {
    render(<App />);
    const lastNameInput = screen.getByTestId('lastNameInput');
    fireEvent.changeText(lastNameInput, 'Doe');

    expect(lastNameInput.props.value).toBe('Doe');
  });

  it('should press payment button', async () => {
    render(<App />);
    const paymentButton = screen.getByTestId('paymentButton');

    await fireEvent.press(paymentButton);

    expect(screen.getByTestId('successModal')).toBeTruthy();
  });
});
