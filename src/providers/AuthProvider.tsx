import React from 'react';
import { User } from '../types/user';

export interface TAccount {
  accessToken: string;
  refreshToken: string;
  user: User;
}
type AccountSetup = {
  authData: TAccount | undefined;
  setAuthData: (authData: TAccount | undefined) => void;
};

export const AuthContext = React.createContext<AccountSetup | null>(null);

type Props = {
  children: React.ReactNode;
} & AccountSetup;

export const AuthProvider = ({ authData, setAuthData, children }: Props) => {
  const AuthContextValue = React.useMemo(
    () => ({
      authData,
      setAuthData,
    }),
    [authData, setAuthData],
  );

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};
