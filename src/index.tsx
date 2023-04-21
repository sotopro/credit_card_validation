/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useReducer, useState} from 'react';
import {Modal, SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import {Button, Input} from './components';
import {inputActionType, inputType, inputTypes} from './utils/inputs/types';
import {onInputChange} from './utils/inputs';
import {INPUT_TYPES} from './constants';
import SuccessImage from '../assets/images/verification-check.png';

export const initialState = {
  cardNumber: {value: '', error: '', touched: false, hasError: true},
  expirationDate: {value: '', error: '', touched: false, hasError: true},
  securityCode: {value: '', error: '', touched: false, hasError: true},
  firstName: {value: '', error: '', touched: false, hasError: true},
  lastName: {value: '', error: '', touched: false, hasError: true},
  isFormValid: false,
};

const formReducer = (state: typeof initialState, action: inputActionType) => {
  switch (action.type) {
    case inputTypes.UPDATE_INPUT:
      const {type, value, hasError, error, touched, isFormValid} = action.data;
      return {
        ...state,
        [type]: {
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const App = (): JSX.Element => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);

  const onSubmitPayment = () => {
    setIsPaymentSubmitted(!isPaymentSubmitted);
  };

  const onChangeTextInput = ({
    value,
    type,
  }: {
    value: string;
    type: inputType;
  }) => {
    onInputChange({type, value, dispatch: dispatchFormState, formState});
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.paymentContainer}>
          <View style={styles.inputContainer}>
            <Input
              testID="cardNumberInput"
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={formState.cardNumber.value}
              onChange={text =>
                onChangeTextInput({value: text, type: INPUT_TYPES.cardNumber})
              }
              keyboardType="number-pad"
              hasError={formState.cardNumber.hasError}
              error={formState.cardNumber.error}
              touched={formState.cardNumber.touched}
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
                value={formState.expirationDate.value}
                onChange={text =>
                  onChangeTextInput({
                    value: text,
                    type: INPUT_TYPES.expirationDate,
                  })
                }
                keyboardType="numbers-and-punctuation"
                hasError={formState.expirationDate.hasError}
                error={formState.expirationDate.error}
                touched={formState.expirationDate.touched}
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
                value={formState.securityCode.value}
                onChange={text =>
                  onChangeTextInput({
                    value: text,
                    type: INPUT_TYPES.securityCode,
                  })
                }
                keyboardType="number-pad"
                hasError={formState.securityCode.hasError}
                error={formState.securityCode.error}
                touched={formState.securityCode.touched}
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
                value={formState.firstName.value}
                onChange={text =>
                  onChangeTextInput({value: text, type: INPUT_TYPES.firstName})
                }
                keyboardType="default"
                hasError={formState.firstName.hasError}
                error={formState.firstName.error}
                touched={formState.firstName.touched}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={255}
              />
            </View>
            <View style={styles.rowContainer}>
              <Input
                testID="lastNameInput"
                label="Last Name"
                placeholder="Doe"
                value={formState.lastName.value}
                onChange={text =>
                  onChangeTextInput({value: text, type: INPUT_TYPES.lastName})
                }
                keyboardType="number-pad"
                hasError={formState.lastName.hasError}
                error={formState.lastName.error}
                touched={formState.lastName.touched}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                maxLength={255}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            testID="paymentButton"
            title="Submit Payment"
            onPress={onSubmitPayment}
            disabled={!formState.isFormValid}
          />
        </View>
      </View>
      <Modal visible={isPaymentSubmitted} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Payment Submitted</Text>
          <Image style={styles.modalImage} source={SuccessImage} />
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  modalImage: {
    width: 100,
    height: 100,
  },
});

export default App;
