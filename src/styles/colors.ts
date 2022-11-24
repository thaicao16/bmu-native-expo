export const colors = {
  colorPrimary: '#FFFFFF',
  colorOnPrimary: '#231F20',
  colorPrimaryContainer: '#0A8020',
  colorOnPrimaryContainer: '#FFFFFF',

  colorSecondary: '#F5F7F9',
  colorOnSecondary: '#231F20',

  colorContainer: '#E9EBEE',
  colorOnContainer: '#6B6E79',
  colorContainerOverDown: '#08671A',
  colorOnPrimaryContainerInverse: '#0A8020',

  themeFieldLabelColor: '#6B6E79',
  fieldNotFocused: '#DFDFE3',
  fieldFocused: '#6B6E79',
  border: '#F5F7F9',
  error: '#C8102E',
  link: '#0A8020',
  white: '#ffffff',
  black: '#000000',
  red: '#D50000',
  gray: '#616161',
  green: '#00C853',
};

export type ColorsType = typeof colors[keyof typeof colors];
