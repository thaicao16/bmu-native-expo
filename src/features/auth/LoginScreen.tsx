import React, {useState} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {baseStylesText} from '../../styles/baseStyles';
// import IcLogo from '../../assets/icons/ic_logo.svg';
// import { ReactComponent as IcLogo } from '../../assets/icons/ic_logo.svg';
import {dimensions} from '../../styles/dimensions';
import useViewModel from './LoginViewModel';
import {Loading} from '../../components/Loading';
import {DialogMessage} from '../../components/DialogMessage';
import {NetWorkAction} from '../../api/NetWorkReducer';
import CustomInput from '../../components/CustomInput';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: dimensions.paddingExtraLarge,
    height: '100%',
  },
  icon: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    //height: dimensions.inputHeight,
    width: '100%',
  },
});

const LoginScreen = () => {
  const {
    userName,
    password,
    verifyAuth,
    errors,
    verifyAuthDispatch,
    setUserName,
    setPassword,
    verifyLogin,
  } = useViewModel();

  const onLoginButtonClick = () => {
    Keyboard.dismiss();
    verifyLogin();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Loading visible={verifyAuth.loading} />
        <DialogMessage
          message={verifyAuth.error?.message}
          visible={!!verifyAuth.error}
          onPressOk={() => {
            verifyAuthDispatch({type: NetWorkAction.IDLE});
          }}
        />
        <View style={styles.icon}>
          {/* <IcLogo /> */}
        </View>

        <CustomInput
          label="Email Address"
          placeholder="email"
          textContentType="emailAddress"
          mode="outlined"
          style={[baseStylesText.textParagraphMedium, styles.inputContainer]}
          textError={errors?.emailError}
          value={userName}
          onChangeText={text => {
            setUserName(text);
          }}
        />
        <CustomInput
          label="Your Password"
          placeholder="password"
          textContentType="password"
          secureTextEntry={true}
          mode="outlined"
          style={[baseStylesText.textParagraphMedium, styles.inputContainer]}
          textError={errors?.passwordError}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Button
          mode="contained"
          onPress={() => {
            onLoginButtonClick();
          }}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
