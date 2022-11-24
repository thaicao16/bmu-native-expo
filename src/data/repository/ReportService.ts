import {Api} from '../../api/Api';
import {ApiResult, Response} from '../../api/Response';
import {ListCountryDto} from '../dto/CountryDto';

export const getCountryLists = (): Promise<ApiResult<ListCountryDto>> => {
  return Api.getInstance().get<Response<ListCountryDto>>(
    '/v1/product-tenant/me/clients',
  );
};
