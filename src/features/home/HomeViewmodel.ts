import {useReducer} from 'react';
import {initState, NetWorkAction, reducer} from '../../api/NetWorkReducer';
import {ReportRepositoryImpl} from '../../data/repository/ReportRepositoryImpl';
import {GetListCountryUseCaseImpl} from '../../domain/usecase/GetListCountryUseCase';

export default function HomeViewModel() {
  const [listCountryState, dispatch] = useReducer(reducer, initState);

  const verifyOtpUseCase = new GetListCountryUseCaseImpl(
    new ReportRepositoryImpl(),
  );

  const getListCountry = () => {
    dispatch({type: NetWorkAction.GetData});
    verifyOtpUseCase
      .getListCountry()
      .then(countryList => {
        console.log('Resul: ', countryList);

        dispatch({type: NetWorkAction.GetDataSuccess, data: countryList});
      })
      .catch(error => {
        dispatch({type: NetWorkAction.GetDataError, error: error});
      });
  };

  return {
    listCountryState,
    getListCountry,
    dispatch,
  };
}
