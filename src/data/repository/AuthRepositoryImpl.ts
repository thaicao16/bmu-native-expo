import {ClientData} from '../../domain/model/ClientData';
import {AuthRepository} from '../../domain/repository/AuthRepository';
import {handleError} from '../ErrorHandler';
import {logOut, verifyAuth, verifyOtp} from './AuthService';
import {clearToken, getToken, saveToken} from '../manager/TokenManager';
import {clearUserData, getUserData, saveUserData} from '../manager/userManager';
import {AppError} from '../../api/NetWorkReducer';
import {Api} from '../../api/Api';
import {UserData} from '../../domain/model/UserData';
import {toUserData} from './UserMapper';

export class AuthRepositoryImpl implements AuthRepository {
  async verifyAuth(userName: string, password: string): Promise<ClientData> {
    try {
      const response = await verifyAuth(userName, password);
      console.log('response:', response);

      return {uuid: response.data.data?.uuid || ''};
    } catch (error) {
      return Promise.reject(handleError(error));
    }
  }

  async verifyOtp(otp: string, uuid: string): Promise<UserData> {
    try {
      const response = await verifyOtp(otp, uuid);

      if (response.data.data) {
        const userDataDto = response.data.data.user;
        await saveUserData(userDataDto);
        const token = response.data.data.token;
        await saveToken(token);
        Api.getApiInstance().addTokenHeader(token);
        return toUserData(userDataDto);
      } else {
        return Promise.reject(new AppError('', 'Login Failed', ''));
      }
    } catch (error) {
      return Promise.reject(handleError(error));
    }
  }

  async isUserLoggedIn(): Promise<boolean> {
    const token = await getToken();
    return !token;
  }

  async getUserData(): Promise<UserData> {
    const userDto = await getUserData();
    return userDto && toUserData(userDto);
  }
  async logOut(): Promise<boolean> {
    try {
      const response = await logOut();
      console.log('response:', response);
      await clearUserData();
      await clearToken();
      return true;
    } catch (error) {
      return Promise.reject(handleError(error));
    }
  }
}
