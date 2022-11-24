import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors'

export default StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column'
    },
    containerView: {
        alignItems: 'center',
        flex: 1,
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logoutView: {
        alignSelf: 'flex-start' ,
        alignItems: 'center',
    },
    logoutButton: {
        padding: 20,
    }
});