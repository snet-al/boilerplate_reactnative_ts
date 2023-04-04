import React from 'react';
import { SnackbarContext } from '../SnackBarProvider';

export function useSnackbar() {
  const contextValue = React.useContext(SnackbarContext);

  if (!contextValue) {
    throw new Error('Please make sure your component tree is wrapped with SnackBarProvider component');
  }

  return contextValue;
}
