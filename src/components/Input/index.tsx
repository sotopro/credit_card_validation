import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({placeholder, value, onChange}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;
