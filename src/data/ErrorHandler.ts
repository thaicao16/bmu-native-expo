import {AppError} from '../api/NetWorkReducer';

export function handleError(error: any): AppError {
  if (error instanceof AppError) {
    return error;
  }
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    return error.response.data.error;
  }
  if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    return new AppError('', '', '');
  }

  // Something happened in setting up the request that triggered an Error
  console.log('Error', error.message);
  return new AppError('', error.message, error.message);
}
