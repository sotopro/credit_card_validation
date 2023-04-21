/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from './components';

const App = (): JSX.Element => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmitPayment = () => {
    console.log('onSubmitPayment');
  };

  const onChangeTextInput = (value: string) => {
    setCardNumber(value);
  };

  const onBlurTextInput = () => {
    console.log('onBlurTextInput');
  };

  const onFocusTextInput = () => {
    console.log('onFocusTextInput');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text>Test</Text>
        <View style={styles.paymentContainer}>
          <View style={styles.inputContainer}>
            <Input
              testID="cardNumberInput"
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={text => onChangeTextInput(text)}
              onBlur={onBlurTextInput}
              onFocus={onFocusTextInput}
              keyboardType="number-pad"
              hasError={false}
              error=""
              touched={false}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              maxLength={16}
            />
          </View>
          <View style={styles.inputRowContainer}>
            <View style={styles.rowContainer}>
              <Input
                testID="expirationDateInput"
                label="Expiration Date"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={text => onChangeTextInput(text)}
                onBlur={onBlurTextInput}
                onFocus={onFocusTextInput}
                keyboardType="number-pad"
                hasError={false}
                error=""
                touched={false}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={5}
              />
            </View>
            <View style={styles.rowContainer}>
              <Input
                testID="cvvInput"
                label="CVV"
                placeholder="123"
                value={cvv}
                onChange={text => onChangeTextInput(text)}
                onBlur={onBlurTextInput}
                onFocus={onFocusTextInput}
                keyboardType="number-pad"
                hasError={false}
                error=""
                touched={false}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={4}
              />
            </View>
          </View>
          <View style={styles.inputRowContainer}>
            <View style={styles.rowContainer}>
              <Input
                testID="firstNameInput"
                label="First Name"
                placeholder="John"
                value={firstName}
                onChange={text => onChangeTextInput(text)}
                onBlur={onBlurTextInput}
                onFocus={onFocusTextInput}
                keyboardType="default"
                hasError={false}
                error=""
                touched={false}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={5}
              />
            </View>
            <View style={styles.rowContainer}>
              <Input
                testID="lastNameInput"
                label="Last Name"
                placeholder="Doe"
                value={lastName}
                onChange={text => onChangeTextInput(text)}
                onBlur={onBlurTextInput}
                onFocus={onFocusTextInput}
                keyboardType="number-pad"
                hasError={false}
                error=""
                touched={false}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={4}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            testID="paymentButton"
            title="Submit Payment"
            onPress={onSubmitPayment}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 20,
  },
  paymentContainer: {
    height: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  inputRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default App;
