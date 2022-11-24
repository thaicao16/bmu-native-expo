import {CommonActions, useNavigation} from '@react-navigation/native';
import {useReducer, useState} from 'react';
import {initState, NetWorkAction, reducer} from '../../api/NetWorkReducer';
import {ScreenName} from '../../constants/ScreenName';
import {AuthRepositoryImpl} from '../../data/repository/AuthRepositoryImpl';
import {AuthRepository} from '../../domain/repository/AuthRepository';
import {
  ValidatePassWord,
  ValidateUseCaseImpl,
} from '../../domain/usecase/ValidateUseCase';
import {VerifyAuthenticateUseCaseImpl} from '../../domain/usecase/VerifyAuthenticateUseCase';

export default function LoginViewModel() {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setError] = useState<ValidatePassWord>();
  const [verifyAuth, verifyAuthDispatch] = useReducer(reducer, initState);
  const navigation = useNavigation();

  const useCase = new ValidateUseCaseImpl();

  const authRepository: AuthRepository = new AuthRepositoryImpl();
  const verifyAuthUseCase: VerifyAuthenticateUseCaseImpl =
    new VerifyAuthenticateUseCaseImpl(authRepository);

  const verifyLogin = () => {
    const validateValue = useCase.validateEmailPassWord(userName, password);
    setError(validateValue);
    if (!validateValue.isValid) {
      return;
    }
    verifyAuthDispatch({type: NetWorkAction.GetData});

    verifyAuthUseCase
      .verifyAuthenticate(userName, password)
      .then(response => {
        console.log('verifyLogin', response);
        verifyAuthDispatch({type: NetWorkAction.GetDataSuccess});
        if (response.uuid) {
          navigation.dispatch(
            CommonActions.navigate({
              name: ScreenName.VERIFY_OTP,
              params: {uuid: response.uuid},
            }),
          );
        }
      })
      .catch(error => {
        verifyAuthDispatch({type: NetWorkAction.GetDataError, error: error});
      });
  };

  return {
    userName,
    password,
    verifyAuth,
    verifyAuthDispatch,
    setUserName,
    setPassword,
    errors,
    verifyLogin,
  };
}
