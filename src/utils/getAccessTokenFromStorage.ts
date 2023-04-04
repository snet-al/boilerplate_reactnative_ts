import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { ACCESS_TOKEN_KEY } from './constants';
/**
 *
 * @param exp expired time in milliseconds
 * @returns true if expired time is before current time in milliseconds
 */
const isExpired = (exp: number) => {
  const now = Date.now();

  return now >= exp;
};

const getAccessTokenFromStorage = new Promise((resolve, reject) => {
  AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    .then((data) => {
      if (data) {
        try {
          // expired time in seconds
          const decoded: {
            exp?: number;
          } = jwt_decode(data);

          if (decoded.exp && !isExpired(decoded.exp * 1000)) {
            resolve(data);
          } else {
            reject(new Error('AccessToken in storage has EXPIRED.'));
          }
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error('No accessToken found in storage'));
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export { getAccessTokenFromStorage };
