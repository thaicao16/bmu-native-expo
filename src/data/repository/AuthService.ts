import {Api} from '../../api/Api';
import {ApiResult, Response} from '../../api/Response';
import {ClientDataDto} from '../dto/ClientDataDto';
import {UserDataDto} from '../dto/UserDto';

export const verifyAuth = (
  userName: string,
  password: string,
): Promise<ApiResult<ClientDataDto>> => {
  return Api.getInstance().post<Response<ClientDataDto>>(
    '/v1/product-tenant/check-authentication',
    {
      email: userName,
      password,
    },
  );
};

export const verifyOtp = (
  otp: string,
  uuid: string,
): Promise<ApiResult<UserDataDto>> => {
  const data = {
    uuid: uuid,
    otp: otp,
  };
  return Api.getInstance().post<Response<UserDataDto>>(
    '/v1/product-tenant/login-otp',
    data,
  );
};

export const logOut = (): Promise<ApiResult<UserDataDto>> => {
  return Api.getInstance().put<Response<UserDataDto>>(
    '/v1/product-tenant/logout',
  );
};
