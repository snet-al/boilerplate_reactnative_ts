import React from 'react';
import { AuthContext } from '../AuthProvider';

export function useAuthContext() {
  const contextValue = React.useContext(AuthContext);

  if (!contextValue) {
    throw new Error('Please make sure your component tree is wrapped with AccountProvider component');
  }

  return contextValue;
}
