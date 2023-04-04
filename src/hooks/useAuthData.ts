import React from 'react';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { getRefreshTokenFromStorage } from '../utils/getRefreshTokenFromStorage';
import { getAccessTokenFromStorage } from '../utils/getAccessTokenFromStorage';
import { ACCESS_TOKEN_KEY, AUTH_USER_INFO_KEY, REFRESH_TOKEN_KEY } from '../utils/constants';
import { TAccount } from '../providers/AuthProvider';
import allSettled from '../utils/allSettled';
import { getUserInfoFromStorage } from '../utils/getUserInfoFromStorage';

export function useAuthData() {
  const [authData, setAuthData] = React.useState<TAccount | undefined>();

  const [isReady, setIsReady] = React.useState(false);

  React.useLayoutEffect(() => {
    const restoreAuthData = async () => {
      const promises = [getAccessTokenFromStorage, getUserInfoFromStorage];

      allSettled(promises).then((results) => {
        const accessToken = results[0]?.value as string;

        // const refreshToken = results[1]?.value as string;

        const user = results[1]?.value;

        // const idToken = results[2]?.value as string;

        if (accessToken) {
          try {
            setAuthData(() => {
              setIsReady(true);

              return {
                accessToken,
                // refreshToken,
                user,
                // idToken,
              };
            });
          } catch (error) {
            setIsReady(true);
            console.log('Can not set initial account state');
          }
        } else {
          setIsReady(true);
        }
      });
    };

    restoreAuthData();
  }, []);

  // React.useEffect(() => {
  //   const saveIdToken = async () => {
  //     if (authData?.idToken && isReady) {
  //       setAuthData(() => {
  //         setIsReady(true);

  //         return {
  //           ...authData,
  //         };
  //       });
  //       await AsyncStorage.setItem(ID_TOKEN_KEY, authData.idToken);
  //     }
  //   };

  //   saveIdToken();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [authData?.idToken]);

  React.useEffect(() => {
    const saveRefreshToken = async () => {
      if (authData && isReady) {
        const refreshTokenAbsoluteLifeTime = Config.REACT_APP_REFRESH_TOKEN_ABSOLUTE_LIFETIME as string;

        if (refreshTokenAbsoluteLifeTime) {
          const exp = parseInt(refreshTokenAbsoluteLifeTime, 10) * 1000 + Date.now();

          await AsyncStorage.setItem(
            REFRESH_TOKEN_KEY,
            JSON.stringify({
              refreshToken: authData?.refreshToken,
              exp,
            }),
          );
        }
      }
    };

    saveRefreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData?.refreshToken]);

  React.useEffect(() => {
    const saveAccessToken = async () => {
      if (authData && isReady) {
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, authData.accessToken);
      }
    };

    saveAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData?.accessToken]);

  React.useEffect(() => {
    const saveUserData = async () => {
      if (authData && isReady) {
        await AsyncStorage.setItem(AUTH_USER_INFO_KEY, JSON.stringify(authData.user));
      }
    };

    saveUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData?.user]);

  return { authData, isReady, setAuthData };
}
