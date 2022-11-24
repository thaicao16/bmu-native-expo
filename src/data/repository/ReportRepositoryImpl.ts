import {Api} from '../../api/Api';
import {AppError} from '../../api/NetWorkReducer';
import {Country} from '../../domain/model/CountryDto';
import {ReportRepository} from '../../domain/repository/ReportRepository';
import {handleError} from '../ErrorHandler';
import {getToken} from '../manager/TokenManager';
import {getCountryLists} from './ReportService';

export class ReportRepositoryImpl implements ReportRepository {
  async getCountryList(): Promise<Country[]> {
    try {
      const token = await getToken();
      if (!token) {
        return Promise.reject(new AppError('', 'Token is empty ', ''));
      }
      console.log('TOKEN:', token);

      Api.getApiInstance().addTokenHeader(token);
      const response = await getCountryLists();
      console.log('response:', response);
      const listCountry =
        response.data.data?.items?.map(dto => {
          return {name: dto.name, uuid: dto.uuid, flag: ''};
        }) || [];
      return listCountry;
    } catch (error) {
      return Promise.reject(handleError(error));
    }
  }

  //async getReport(from: string, to: string): Promise<UserData> {}
}
