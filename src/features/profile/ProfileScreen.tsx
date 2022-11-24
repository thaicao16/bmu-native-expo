import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NetWorkAction } from '../../api/NetWorkReducer';
import { CustomSvgIcon, IconName } from '../../components/CustomSvgIcon';
import { DialogMessage } from '../../components/DialogMessage';
import { Loading } from '../../components/Loading';
import { baseStylesText } from '../../styles/baseStyles';
import { dimensions } from '../../styles/dimensions';
import { GlobalContext } from '../auth/GlobalScopeProvider';
import style from './ProfileScreen.style';
import ProfileScreenViewModel from './ProfileScreenViewModel';


export const ProfileScreen = () => {
    const { userData } = useContext(GlobalContext);
    const navigation = useNavigation();
    const { logoutState, logOut, logoutDispatch } = ProfileScreenViewModel();
    const onLogout = () => {
        logOut();
    };

    return (
        <View style={style.container}>
            <Loading visible={logoutState.loading} />
            <DialogMessage
                message={logoutState.error?.message}
                visible={!!logoutState.error}
                onPressOk={() => {
                    logoutDispatch({ type: NetWorkAction.IDLE });
                }}
            />
            <View style={style.containerView}>
                <CustomSvgIcon
                    name={IconName.IcLogo}
                    style={{ margin: dimensions.marginNormal }}
                    width={90}
                    height={90}
                />
                <Text style={baseStylesText.textTitleMedium}>{userData?.name}</Text>
                <Text style={baseStylesText.textParagraphMedium}>
                    {userData?.email || 'email'}
                </Text>

            </View>
            <View style={style.bottomView}>
                <TouchableOpacity onPress={() => onLogout()} style={style.logoutView}>
                    <Text style={[style.logoutButton, baseStylesText.textParagraphLargeLink]}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};