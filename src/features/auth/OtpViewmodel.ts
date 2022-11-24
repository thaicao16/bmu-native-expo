import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import {useContext, useReducer, useState} from 'react';
import {initState, NetWorkAction, reducer} from '../../api/NetWorkReducer';
import {ScreenName} from '../../constants/ScreenName';
import {AuthRepositoryImpl} from '../../data/repository/AuthRepositoryImpl';
import {VerifyOtpUseCaseImpl} from '../../domain/usecase/VerifyOtpUseCase';
import {GlobalContext} from './GlobalScopeProvider';

export default function VerifyOtpViewModel() {
  const [otp, setOtp] = useState('');
  const [verifyOtp, verifyOtpDispatch] = useReducer(reducer, initState);

  const verifyOtpUseCase = new VerifyOtpUseCaseImpl(new AuthRepositoryImpl());

  const {onGetUserSuccess} = useContext(GlobalContext);
  const navigation = useNavigation();
  const route = useRoute();
  const uuid: string = route.params?.uuid;
  console.log('Params', uuid);

  const validateOtp = () => {
    verifyOtpDispatch({type: NetWorkAction.GetData});
    verifyOtpUseCase
      .verifyOtp(otp, uuid)
      .then(userData => {
        verifyOtpDispatch({type: NetWorkAction.GetDataSuccess, data: userData});
        onGetUserSuccess(userData);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ScreenName.MAIN_DRAWER}],
          }),
        );
      })
      .catch(error => {
        verifyOtpDispatch({type: NetWorkAction.GetDataError, error: error});
      });
  };

  return {
    otp,
    verifyOtp,
    setOtp,
    validateOtp,
  };
}
