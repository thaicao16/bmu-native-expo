import {DefaultTheme} from 'react-native-paper';
import {colors} from './colors';

export const lightTheme = {
  ...DefaultTheme,
  custom: 'property',
  colors: {
    primary: '#C8102E',
    secondary: colors.colorSecondary,
    tertiary: '#a1b2c3',
    background: colors.colorPrimary,
    surface: colors.colorPrimary,
    accent: colors.link,
    error: colors.error,
    text: '#231F20',
    onSurface: colors.colorPrimary,
    disabled: colors.fieldNotFocused,
    placeholder: '#6B6E79',
    backdrop: colors.colorPrimary,
    notification: colors.colorPrimary,
    red: colors.red,
    white: colors.white,
    black: colors.black,
    gray: colors.gray,
  },
};
