import React from 'react';
import {View} from 'react-native';
import {HelperText, TextInput, TextInputProps} from 'react-native-paper';

interface CustomInputProps extends TextInputProps {
  textError?: string | null;
}

const CustomInput = ({textError, ...props}: CustomInputProps) => {
  return (
    <View>
      <TextInput {...props} error={!!textError} />
      <HelperText type="error" visible={!!textError} padding="none">
        {textError}
      </HelperText>
    </View>
  );
};

export default CustomInput;
