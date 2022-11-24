import {AxiosResponse} from 'axios';
import {AppError} from './NetWorkReducer';

export interface Response<T> {
  status: boolean;
  data: T | null;
  error: AppError;
}
export type ApiResult<T> = AxiosResponse<Response<T>>;
