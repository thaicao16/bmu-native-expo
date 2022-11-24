import {CommonActions, useNavigation} from '@react-navigation/native';
import {useContext, useReducer} from 'react';
import {initState, NetWorkAction, reducer} from '../../api/NetWorkReducer';
import {ScreenName} from '../../constants/ScreenName';
import {AuthRepositoryImpl} from '../../data/repository/AuthRepositoryImpl';
import {GetUserCaseImpl} from '../../domain/usecase/GetUserCase';
import {GlobalContext} from '../auth/GlobalScopeProvider';

export default function SplashViewModel() {
  const getUserCase = new GetUserCaseImpl(new AuthRepositoryImpl());
  const [userDataState, userDataDispatch] = useReducer(reducer, initState);
  const {onGetUserSuccess} = useContext(GlobalContext);
  const navigation = useNavigation();

  const getUserData = () => {
    userDataDispatch({type: NetWorkAction.GetData});
    getUserCase
      .getUserData()
      .then(userData => {
        onGetUserSuccess(userData);
        if (userData) {
          userDataDispatch({
            type: NetWorkAction.GetDataSuccess,
            data: userData,
          });
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: ScreenName.MAIN_DRAWER}],
            }),
          );
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: ScreenName.AUTH}],
            }),
          );
        }
      })
      .catch(error => {
        console.log('getUserData: error', error);
        userDataDispatch({type: NetWorkAction.GetDataError, error: error});
      });
  };

  return {getUserData, userDataState};
}
