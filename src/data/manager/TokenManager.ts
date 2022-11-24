import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataStorageKey} from '../../constants/DataStorageKey';

export const clearToken = async () => {
  await AsyncStorage.removeItem(DataStorageKey.TOKEN_DATA_STORAGE);
};

export const saveToken = async (token: string) => {
  await AsyncStorage.setItem(DataStorageKey.TOKEN_DATA_STORAGE, token);
};

export const getToken = async () => {
  const value = await AsyncStorage.getItem(DataStorageKey.TOKEN_DATA_STORAGE);
  return value;
};
