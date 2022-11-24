import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {dimensions, fontWeight, fontFamily} from './dimensions';

export const divider = StyleSheet.create({
  divider: {
    with: '100%',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});

export const baseStylesText = StyleSheet.create({
  textDisable: {
    color: colors.colorOnContainer,
  },
  textTitleHeader: {
    color: colors.colorOnPrimary,
    fontSize: dimensions.textSizeTitleHeader,
    fontWeight: fontWeight.fontWeightSemiBold,
    fontFamily: fontFamily.fontSemiBold
  },

  textTitleMedium: {
    color: colors.colorOnPrimary,
    fontSize: dimensions.textSizeMedium,
    fontWeight: fontWeight.fontWeightSemiBold,
    fontFamily: fontFamily.fontMedium
  },

  textParagraphLarge: {
    color: colors.colorOnPrimary,
    fontSize: dimensions.textSizeParagraphLarge,
    fontFamily: fontFamily.fontRegular
  },
  textParagraphMedium: {
    color: colors.colorOnPrimary,
    fontSize: dimensions.textSizeParagraphMedium,
    fontFamily: fontFamily.fontMedium
  },
  textParagraphSmall: {
    color: colors.colorOnPrimary,
    fontSize: dimensions.textSizeParagraphSmall,
    fontFamily: fontFamily.fontMedium
  },
  textParagraphLargeLink: {
    color: colors.link,
    fontSize: dimensions.textSizeParagraphLarge,
    fontFamily: fontFamily.fontRegular
  },
  textParagraphMediumLink: {
    color: colors.link,
    fontSize: dimensions.textSizeParagraphMedium,
    fontFamily: fontFamily.fontMedium
  },
  textParagraphMediumError: {
    color: colors.error,
    fontSize: dimensions.textSizeParagraphMedium,
    fontFamily: fontFamily.fontMedium
  },
});
export const baseStyleButton = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
    height: 48,
    backgroundColor: colors.colorPrimaryContainer,
  },

  buttonDisable: {
    backgroundColor: colors.colorContainer,
  },
  textDisable: {
    color: colors.colorOnContainer,
  },
});
