import { StyleSheet, Dimensions } from 'react-native';
import { COLOR } from '../../../styles/common';

const screen = Dimensions.get('window');

export const optionStyles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        width: screen.width,
        height: 300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: COLOR.white,
        borderWidth: 1,
        backgroundColor: COLOR.white,
        paddingTop: 50,
        paddingLeft: screen.width * 0.1,
        elevation: 3,
        shadowColor: COLOR.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
    },
});

