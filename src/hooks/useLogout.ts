import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { TAccount } from '../providers/AuthProvider';
import { ACCESS_TOKEN_KEY, AUTH_USER_INFO_KEY, ID_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../utils/constants';
import { useAuthData } from './useAuthData';

export default function useLogout({
  onLogoutSuccess,
}: {
  onLoginSuccess?: (authData: TAccount) => void;
  onLogoutSuccess?: () => void;
}) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { setAuthData } = useAuthData();

  const logout = async () => {
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    await AsyncStorage.removeItem(AUTH_USER_INFO_KEY);
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    await AsyncStorage.removeItem(ID_TOKEN_KEY);
    navigation.replace('SignedOutGroup');

    setAuthData(undefined);

    if (typeof onLogoutSuccess === 'function') {
      onLogoutSuccess();
    }
  };

  return {
    logout,
  };
}
