import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { TAccount } from '../providers/AuthProvider';
import client from './client';
import { useAuthContext } from '../providers/hooks/useAuthContext';
import { useSnackbar } from '../providers/hooks/useSnackbar';
import { Error } from '../types/general';

export function useLogin() {
  const [serverError, setServerError] = useState<string | null>(null);
  const { showSnackBar } = useSnackbar();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { setAuthData } = useAuthContext();

  const onCredentialsSuccess = (authData: TAccount) => {
    if (authData?.accessToken) {
      setAuthData(authData);
    }
  };

  const { mutate, isLoading } = useMutation(client.users.login, {
    onSuccess: (data) => {
      const authData = data?.data;

      if (!authData?.access_token) {
        setServerError('error-credential-wrong');

        return;
      }
      const payload = {
        accessToken: authData.access_token,
        refreshToken: authData.refresh_token,
        user: authData.user,
      };

      onCredentialsSuccess(payload);
      navigation.reset({ index: 0, routes: [{ name: 'SignedInGroup' }] });
    },
    onError: (error: Error) => {
      showSnackBar(error?.response?.data?.message || 'Gabim');
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}
