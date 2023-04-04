import AsyncStorage from '@react-native-async-storage/async-storage';
import { REFRESH_TOKEN_KEY } from './constants';

const isExpired = (exp: number) => Date.now() >= exp;

const getRefreshTokenFromStorage = new Promise((resolve, reject) => {
  AsyncStorage.getItem(REFRESH_TOKEN_KEY)
    .then((data) => {
      if (data) {
        try {
          const parsedData = JSON.parse(data);

          if (parsedData.exp && !isExpired(parsedData.exp)) {
            resolve(parsedData.refreshToken);
          } else {
            reject(new Error('refreshToken in storage has EXPIRED.'));
          }
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error('No refreshToken present in storage'));
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export { getRefreshTokenFromStorage };
