import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Component from '..';

describe('Input', () => {
  const onChange = jest.fn();

  it('should render', () => {
    render(<Component placeholder="test" value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText('test')).toBeTruthy();
  });

  it('should call onChange', () => {
    render(<Component placeholder="test" value="" onChange={onChange} />);
    fireEvent.changeText(screen.getByPlaceholderText('test'), 'test');

    expect(onChange).toHaveBeenCalledWith('test');
  });
});
