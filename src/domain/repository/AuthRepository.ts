import {ClientData} from '../model/ClientData';
import {UserData} from '../model/UserData';

export interface AuthRepository {
  verifyAuth(userName: string, password: string): Promise<ClientData>;

  verifyOtp(otp: string, uuid: string): Promise<UserData>;

  getUserData(): Promise<UserData>;

  isUserLoggedIn(): Promise<boolean>;

  logOut(): Promise<boolean>;
}
