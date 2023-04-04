import AsyncStorage from '@react-native-async-storage/async-storage';
import { ID_TOKEN_KEY } from './constants';

const getIdTokenFromStorage = new Promise((resolve, reject) => {
  AsyncStorage.getItem(ID_TOKEN_KEY)
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error('No IdToken present in storage'));
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export { getIdTokenFromStorage };
