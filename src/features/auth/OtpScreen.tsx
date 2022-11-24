import React from 'react';
import {Keyboard, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {DialogMessage} from '../../components/DialogMessage';
import {Loading} from '../../components/Loading';
import {baseStylesText} from '../../styles/baseStyles';
import {colors} from '../../styles/colors';
import {dimensions} from '../../styles/dimensions';

import useOtpViewModel from './OtpViewmodel';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.colorPrimary,
    padding: dimensions.paddingLarge,
    paddingTop: 50,
    height: '100%',
  },
  inputContainer: {
    height: dimensions.inputHeight,
    width: '100%',
    marginBottom: dimensions.marginLarge,
  },
});

export const OtpScreen = () => {
  const {otp, setOtp, verifyOtp, validateOtp} = useOtpViewModel();

  const onVerifyOtpButtonClick = () => {
    Keyboard.dismiss();
    validateOtp();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DialogMessage
          message={verifyOtp.error?.message}
          visible={!!verifyOtp.error}
        />
        <Loading visible={verifyOtp.loading} />

        <TextInput
          label="Enter OTP sent to your email"
          placeholder="OTP"
          textContentType="oneTimeCode"
          keyboardType="numeric"
          mode="outlined"
          style={[baseStylesText.textParagraphMedium, styles.inputContainer]}
          value={otp}
          onChangeText={text => {
            setOtp(text);
          }}
        />

        <Button
          disabled={!otp}
          mode="contained"
          onPress={() => {
            onVerifyOtpButtonClick();
          }}>
          Verify OTP
        </Button>
      </View>
    </SafeAreaView>
  );
};
