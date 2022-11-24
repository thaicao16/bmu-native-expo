import React from 'react';

import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {baseStylesText} from '../styles/baseStyles';
import {colors} from '../styles/colors';
import {dimensions} from '../styles/dimensions';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  dialogContainer: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    ...baseStylesText.textTitleHeader,
    padding: dimensions.paddingNormal,
    textAlign: 'center',
  },
  message: {
    ...baseStylesText.textParagraphMedium,
    textAlign: 'center',
    padding: dimensions.paddingNormal,
  },
  positiveButton: {
    width: '100%',
    padding: dimensions.paddingNormal,
  },
});

export const DialogMessage = ({
  title = 'OOPS',
  message = 'Some thing went wrong please try again!',
  visible = false,
  onPressOk = () => {},
}) => {
  const {height, width} = useWindowDimensions();
  return (
    (visible && (
      <View style={[styles.container, {height, width}]}>
        <View style={styles.dialogContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Divider />
          <Button onPress={() => onPressOk()}>OK</Button>
        </View>
      </View>
    )) || <></>
  );
};
