export const NetWorkAction = {
  GetData: 'GET_DATA_REQUEST',
  GetDataSuccess: 'GET_DATA_SUCCESS',
  GetDataError: 'GET_DATA_ERROR',
  IDLE: 'IDLE',
};
export class AppError extends Error {
  code: string;
  message: string;
  convertMessage: string;
  constructor(_code: string, _message: string, _convertMessage: string) {
    super();
    this.code = _code;
    this.message = _message;
    this.convertMessage = _convertMessage;
  }
}
export interface Action<T> {
  type: string;
  data?: T | null;
  error?: AppError;
}
export interface State<T> {
  loading: boolean;
  data: T | null;
  error: AppError | null;
}
export const initState = {
  loading: false,
  data: null,
  error: null,
};

export function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case NetWorkAction.GetData:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case NetWorkAction.GetDataSuccess:
      return {
        ...state,
        loading: false,
        data: action.data || null,
      };
    case NetWorkAction.GetDataError:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error || null,
      };

    case NetWorkAction.IDLE:
      return initState;

    default:
      return state;
  }
}
