import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';
import {styles} from './styles';

interface InputProps {
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmitEditing?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  style?: TextStyle | TextStyle[];
  hasError?: boolean;
  error?: string;
  touched?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  testID?: string;
}

const Input = ({
  placeholder,
  placeholderTextColor,
  value,
  onChange,
  onBlur,
  onFocus,
  onSubmitEditing,
  keyboardType,
  label,
  style,
  hasError,
  error,
  touched,
  autoCorrect,
  autoCapitalize,
  returnKeyType,
  maxLength,
  testID,
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const onFocusHandler = () => {
    setFocused(true);
    onFocus && onFocus();
  };
  const onBlurHandler = () => {
    setFocused(false);
    onBlur && onBlur();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={[focused ? styles.labelFocused : styles.label, style]}>
          {label}
        </Text>
        <TextInput
          testID={testID}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChange}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
        />
        {hasError && touched && (
          <View style={styles.message}>
            <Text style={styles.helperText}>{error}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
