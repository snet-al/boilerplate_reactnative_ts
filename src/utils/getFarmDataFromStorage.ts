import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';
import { FARM_DATA } from './constants';

const getFarmDataFromStorage = new Promise<User>((resolve, reject) => {
  AsyncStorage.getItem(FARM_DATA)
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

export { getFarmDataFromStorage };
