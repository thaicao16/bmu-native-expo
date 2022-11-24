import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataStorageKey} from '../../constants/DataStorageKey';
import {UserDto} from '../dto/UserDto';

export const clearUserData = async () => {
  await AsyncStorage.removeItem(DataStorageKey.USER_DATA_STORAGE);
};

export const saveUserData = async (user: UserDto) => {
  await AsyncStorage.setItem(
    DataStorageKey.USER_DATA_STORAGE,
    JSON.stringify(user),
  );
};

export const getUserData = async (): Promise<UserDto> => {
  const value = await AsyncStorage.getItem(DataStorageKey.USER_DATA_STORAGE);
  return (value && JSON.parse(value)) || null;
};
