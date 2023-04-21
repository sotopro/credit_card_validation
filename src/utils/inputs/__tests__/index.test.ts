import {
  validateCreditCardNumber,
  validateExpirationDate,
  isAmexCard,
  validateInput,
  onInputChange,
} from '..';

describe('validateCreditCardNumber', () => {
  it('returns true for valid credit card numbers', () => {
    expect(validateCreditCardNumber('4111 1111 1111 1111')).toBe(true);
    expect(validateCreditCardNumber('5555 5555 5555 4444')).toBe(true);
    expect(validateCreditCardNumber('3782 8224 6310 005')).toBe(true);
  });

  it('returns false for invalid credit card numbers', () => {
    expect(validateCreditCardNumber('4111 1111 1111 1112')).toBe(false);
    expect(validateCreditCardNumber('5555 5555 5555 4445')).toBe(false);
    expect(validateCreditCardNumber('3782 8224 6310 006')).toBe(false);
    expect(validateCreditCardNumber('not a credit card number')).toBe(false);
  });
});

describe('validateExpirationDate', () => {
  it('returns true for valid expiration dates', () => {
    expect(validateExpirationDate('12/25')).toBe(true);
    expect(validateExpirationDate('12/23')).toBe(true);
    expect(validateExpirationDate('01/26')).toBe(true);
  });

  it('returns false for invalid expiration dates', () => {
    expect(validateExpirationDate('12/20')).toBe(false);
    expect(validateExpirationDate('01/23')).toBe(false);
  });
});

describe('isAmexCard', () => {
  it('returns true for amex cards', () => {
    expect(isAmexCard('3782 8224 6310 005')).toBe(true);
    expect(isAmexCard('3714 4963 5398 431')).toBe(true);
  });

  it('returns false for non-amex cards', () => {
    expect(isAmexCard('4111 1111 1111 1111')).toBe(false);
    expect(isAmexCard('5555 5555 5555 4444')).toBe(false);
  });
});

describe('validateInput', () => {
  it('returns hasError true and error message for invalid card number', () => {
    expect(validateInput({type: 'cardNumber', value: ''})).toEqual({
      hasError: true,
      error: 'Card number is required',
    });
    expect(
      validateInput({type: 'cardNumber', value: '4111 1111 1111 1112'}),
    ).toEqual({hasError: true, error: 'Card number is not valid'});
  });

  it('returns valid for valid card number', () => {
    expect(
      validateInput({type: 'cardNumber', value: '4557880813150087'}),
    ).toEqual({hasError: false, error: ''});
  });

  it('returns hasError true and error message for invalid expiration date', () => {
    expect(validateInput({type: 'expirationDate', value: ''})).toEqual({
      hasError: true,
      error: 'Expiration date is required',
    });
    expect(validateInput({type: 'expirationDate', value: '12/20'})).toEqual({
      hasError: true,
      error: 'Expiration date is not valid',
    });
  });

  it('returns valid for valid expiration date', () => {
    expect(validateInput({type: 'expirationDate', value: '12/25'})).toEqual({
      hasError: false,
      error: '',
    });
  });

  it('returns hasError true and error message for invalid security code', () => {
    expect(validateInput({type: 'securityCode', value: ''})).toEqual({
      hasError: true,
      error: 'Security code is required',
    });
    expect(validateInput({type: 'securityCode', value: 'adawd'})).toEqual({
      hasError: true,
      error: 'Security code is not valid',
    });
  });

  it('returns valid for valid security code', () => {
    expect(validateInput({type: 'securityCode', value: '123'})).toEqual({
      hasError: false,
      error: '',
    });
  });

  it('returns hasError true and error message for invalid first name', () => {
    expect(validateInput({type: 'firstName', value: ''})).toEqual({
      hasError: true,
      error: 'First Name is required',
    });
    expect(validateInput({type: 'firstName', value: '12123'})).toEqual({
      hasError: true,
      error: 'First Name is not valid',
    });
  });

  it('returns valid for valid first name', () => {
    expect(validateInput({type: 'firstName', value: 'John'})).toEqual({
      hasError: false,
      error: '',
    });
  });

  it('returns hasError true and error message for invalid last name', () => {
    expect(validateInput({type: 'lastName', value: ''})).toEqual({
      hasError: true,
      error: 'Last Name is required',
    });
    expect(validateInput({type: 'lastName', value: '12123'})).toEqual({
      hasError: true,
      error: 'Last Name is not valid',
    });
  });

  it('returns valid for valid last name', () => {
    expect(validateInput({type: 'lastName', value: 'Doe'})).toEqual({
      hasError: false,
      error: '',
    });
  });

  it('returns hasError true and error message for invalid address', () => {
    expect(validateInput({type: 'address', value: ''})).toEqual({
      hasError: false,
      error: '',
    });
  });
});

describe('onInputChange', () => {
  const dispatch = jest.fn();
  const formState = {
    cardNumber: {
      value: '4557880813150087',
      error: '',
      touched: false,
      hasError: true,
    },
    expirationDate: {value: '', error: '', touched: false, hasError: true},
    securityCode: {value: '', error: '', touched: false, hasError: true},
    firstName: {value: '', error: '', touched: false, hasError: true},
    lastName: {value: '', error: '', touched: false, hasError: true},
    isFormValid: false,
  };

  it('should update the input with a valid value', () => {
    const input = {
      type: 'cardNumber',
      value: '4557880813150087',
      dispatch,
      formState,
    };

    onInputChange(input);

    expect(dispatch).toHaveBeenCalled();
  });

  it('should update the input with an invalid value', () => {
    const input = {
      type: 'cardNumber',
      value: '123123123123',
      dispatch,
      formState,
    };

    onInputChange(input);

    expect(dispatch).toHaveBeenCalled();
  });
});
