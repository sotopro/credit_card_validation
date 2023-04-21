import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Component from '..';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Component title="Test" disabled={false} />);

    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    render(<Component title="Test" onPress={onPress} />);

    fireEvent.press(screen.getByText('Test'));

    expect(onPress).toHaveBeenCalled();
  });

  it('should disable button', () => {
    const onPress = jest.fn();
    render(<Component title="Test" onPress={onPress} disabled={true} />);

    expect(screen.getByText('Test')).toBeTruthy();
  });
});
