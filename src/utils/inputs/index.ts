import type {onInputChangeType, validateInputType} from './types';
import {INPUT_TYPES} from '../../constants';
import {inputTypes} from './types';
const {UPDATE_INPUT} = inputTypes;

const validateCreditCardNumber = (cardNumber: string): boolean => {
  cardNumber = cardNumber.replace(/[-\s]/g, '');

  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const formatExpirationDate = /^([0-9]{2})\/([0-9]{2})$/;

const formatSecurityCode = /^[0-9]{3,4}$/;
const formatFirstName = /^[a-zA-Z ]{2,30}$/;
const formatLastName = /^[a-zA-Z ]{2,30}$/;

export const validateInput: validateInputType = ({type, value}) => {
  let hasError = false;
  let error = '';

  switch (type) {
    case INPUT_TYPES.cardNumber:
      if (value.trim() === '') {
        hasError = true;
        error = 'Card number is required';
      } else if (!validateCreditCardNumber(value)) {
        hasError = true;
        error = 'Card number is not valid';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case INPUT_TYPES.expirationDate:
      if (value.trim() === '') {
        hasError = true;
        error = 'Expiration date is required';
      } else if (!formatExpirationDate.test(value)) {
        hasError = true;
        error = 'Expiration date is not valid';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case INPUT_TYPES.securityCode:
      if (value.trim() === '') {
        hasError = true;
        error = 'Security code is required';
      } else if (!formatSecurityCode.test(value)) {
        hasError = true;
        error = 'Security code is not valid';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case INPUT_TYPES.firstName:
      if (value.trim() === '') {
        hasError = true;
        error = 'First Name is required';
      } else if (!formatFirstName.test(value)) {
        hasError = true;
        error = 'First Name is not valid';
      } else {
        hasError = false;
        error = '';
      }
      break;
    case INPUT_TYPES.lastName:
      if (value.trim() === '') {
        hasError = true;
        error = 'Last Name is required';
      } else if (!formatLastName.test(value)) {
        hasError = true;
        error = 'Last Name is not valid';
      } else {
        hasError = false;
        error = '';
      }
      break;
    default:
      break;
  }

  return {hasError, error};
};

export const onInputChange: onInputChangeType = ({
  type,
  value,
  dispatch,
  formState,
}) => {
  const {hasError, error} = validateInput({type, value});
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== type && hasError) {
      isFormValid = false;
      break;
    } else if (key !== type && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_INPUT,
    data: {
      type,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
