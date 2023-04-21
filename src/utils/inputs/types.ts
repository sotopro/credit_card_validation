import {Dispatch} from 'react';
import {initialState} from '../..';

export enum inputTypes {
  UPDATE_INPUT = 'UPDATE_INPUT',
}

export type inputType = string;

export type validateInputType = ({
  type,
  value,
}: {
  type: string;
  value: string;
}) => {
  hasError: boolean;
  error: string;
};

export type inputActionType = {
  type: string;
  data: {
    type: inputType;
    value: string;
    hasError: boolean;
    error: string;
    touched: boolean;
    isFormValid: boolean;
  };
};

export type onInputChangeType = ({
  type,
  value,
  dispatch,
  formState,
}: {
  type: inputType;
  value: string;
  dispatch: Dispatch<inputActionType>;
  formState: typeof initialState | any;
}) => void;
