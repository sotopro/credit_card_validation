import React from 'react';
import {View, TouchableOpacity, TextStyle, Text} from 'react-native';
import {styles} from './styles';

interface buttonProps {
  testID?: string;
  onPress: () => void;
  title: string;
  style?: TextStyle | TextStyle[];
  disabled?: boolean;
}

const Button = ({testID, onPress, title, style, disabled}: buttonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      testID={testID}
      onPress={onPress}
      style={[disabled ? styles.disabledContainer : styles.container, style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
