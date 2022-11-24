// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://api.phdvasia.com';

export class Api {
  public axiosInstance: AxiosInstance;
  private static instance: Api;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: 120000,
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): any {
    return {
      'Content-Type': 'application/json',
      lang: 'en',
      client: '2f28344b-2d60-4754-8985-5c23864a3737',
    };
  }

  public addTokenHeader(token: string): void {
    this.axiosInstance.interceptors.request.use(function (config) {
      config.headers['x-token'] = token;
      return config;
    });
  }

  public static getApiInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  public static getInstance(): AxiosInstance {
    return this.getApiInstance().axiosInstance;
  }
}
