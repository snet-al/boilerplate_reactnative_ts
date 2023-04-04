import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';
import { AUTH_USER_INFO_KEY } from './constants';

const getUserInfoFromStorage = new Promise<User>((resolve, reject) => {
  AsyncStorage.getItem(AUTH_USER_INFO_KEY)
    .then((data) => {
      if (data) {
        try {
          const parsedData = JSON.parse(data);

          resolve(parsedData);
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

export { getUserInfoFromStorage };
