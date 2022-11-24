import {CommonActions, useNavigation} from '@react-navigation/native';
import {useContext, useReducer} from 'react';
import {initState, NetWorkAction, reducer} from '../../api/NetWorkReducer';
import {ScreenName} from '../../constants/ScreenName';
import {AuthRepositoryImpl} from '../../data/repository/AuthRepositoryImpl';
import {LogoutUseCaseImpl} from '../../domain/usecase/LogoutUseCase';
import {GlobalContext} from '../auth/GlobalScopeProvider';

export default function ProfileScreenViewmodel() {
  const [logoutState, logoutDispatch] = useReducer(reducer, initState);

  const verifyOtpUseCase = new LogoutUseCaseImpl(new AuthRepositoryImpl());

  const {onLogout} = useContext(GlobalContext);
  const navigation = useNavigation();

  const logOut = () => {
    logoutDispatch({type: NetWorkAction.GetData});
    verifyOtpUseCase
      .logOut()
      .then(isLoggedOut => {
        logoutDispatch({
          type: NetWorkAction.GetDataSuccess,
          data: isLoggedOut,
        });
        onLogout();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ScreenName.AUTH}],
          }),
        );
      })
      .catch(error => {
        logoutDispatch({type: NetWorkAction.GetDataError, error: error});
      });
  };

  return {logoutState, logOut, logoutDispatch};
}
