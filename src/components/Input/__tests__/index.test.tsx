import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Component from '..';

const mockOnChange = jest.fn();
const mockOnSubmitEditing = jest.fn();
const mockOnFocus = jest.fn();
const mockOnBlur = jest.fn();

const mockProps = {
  placeholder: 'Placeholder',
  placeholderTextColor: 'black',
  value: 'Value',
  onChange: mockOnChange,
  onSubmitEditing: mockOnSubmitEditing,
  onFocus: mockOnFocus,
  onBlur: mockOnBlur,
  label: 'Label',
  hasError: false,
  error: '',
  touched: false,
  autoCorrect: false,
  maxLength: 20,
  testID: 'input',
};

describe('Input', () => {
  it('should render', () => {
    render(<Component {...mockProps} />);

    expect(screen.getByTestId('input')).toBeTruthy();
    expect(screen.getByText('Label')).toBeTruthy();
    expect(screen.queryByText('Error')).toBeFalsy();
  });

  it('should render error', () => {
    render(<Component {...mockProps} hasError error="Error" touched />);

    expect(screen.getByText('Error')).toBeTruthy();
  });

  it('should call onChange', () => {
    render(<Component {...mockProps} />);

    fireEvent.changeText(screen.getByTestId('input'), 'New value');

    expect(mockOnChange).toHaveBeenCalledWith('New value');
  });

  it('should call onSubmitEditing', () => {
    render(<Component {...mockProps} />);

    fireEvent(screen.getByTestId('input'), 'submitEditing');

    expect(mockOnSubmitEditing).toHaveBeenCalled();
  });

  it('should call onFocus', () => {
    render(<Component {...mockProps} />);

    fireEvent(screen.getByTestId('input'), 'focus');

    expect(mockOnFocus).toHaveBeenCalled();
  });

  it('should call onBlur', () => {
    render(<Component {...mockProps} />);

    fireEvent(screen.getByTestId('input'), 'blur');

    expect(mockOnBlur).toHaveBeenCalled();
  });
});
