import React from 'react';
import {View, TouchableOpacity, TextStyle, Text} from 'react-native';
import {styles} from './styles';

interface buttonProps {
  testID?: string;
  onPress: () => void;
  title: string;
  style?: TextStyle | TextStyle[];
}

const Button = ({testID, onPress, title, style}: buttonProps) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
