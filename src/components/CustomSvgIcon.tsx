import React from 'react';
import {Pressable, View, ViewProps} from 'react-native';
// import IcClose from '../assets/icons/ic_cross.svg';
// import { ReactComponent as IcClose } from '../assets/icons/ic_cross.svg';
// import IcShowPass from '../assets/icons/ic_visibility_on.svg';
// import IcHidePass from '../assets/icons/ic_visibility_off.svg';
// import IcLogo from '../assets/icons/ic_logo.svg';
// import IcLogoWithText from '../assets/icons/ic_logowith_text_small.svg';
// import IcExpandLess from '../assets/icons/ic_expand_less.svg';
// import IcCheckMarkGreen from '../assets/icons/ic_checkmark_green.svg';

export const IconName = {
  IcClose: 'Close',
  IcShowPass: 'ShowPass',
  IcHidePass: 'hidePass',
  IcLogo: 'logo',
  IcLogoWithText: 'logoWithText',
  IcExpandLess: 'expandLess',
  IcCheckMarkGreen: 'checkMarkGreen',
};

export const SvgIcon = (name: string, width?: number, height?: number) => {
  switch (name) {
    // case IconName.IcClose:
    //   return <IcClose width={width} height={height} />;
    // case IconName.IcShowPass:
    //   return <IcShowPass width={width} height={height} />;
    // case IconName.IcHidePass:
    //   return <IcHidePass width={width} height={height} />;
    // case IconName.IcLogo:
    //   return <IcLogo width={width} height={height} />;
    // case IconName.IcLogoWithText:
    //   return <IcLogoWithText width={width} height={height} />;
    // case IconName.IcExpandLess:
    //   return <IcExpandLess width={width} height={height} />;
    // case IconName.IcCheckMarkGreen:
    //   return <IcCheckMarkGreen width={width} height={height} />;

    default:
      return <></>;
  }
};

interface Props extends ViewProps {
  name: string;
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const CustomSvgIcon: React.FC<Props> = ({
  name,
  width,
  height,
  onPress,
  ...childrenProps
}) => {
  return (
    <View {...childrenProps}>
      <Pressable onPress={() => onPress && onPress()}>
        {SvgIcon(name, width, height)}
      </Pressable>
    </View>
  );
};
