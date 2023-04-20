import {Dispatch} from 'react';

export enum inputTypes {
  UPDATE_INPUT = 'UPDATE_INPUT',
}

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
    type: string;
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
  type: string;
  value: string;
  dispatch: Dispatch<inputActionType>;
  formState: {[key: string]: {hasError: boolean; error: string}};
}) => void;
