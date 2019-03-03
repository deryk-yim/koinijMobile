import { StyleSheet, Dimensions } from 'react-native';
import { COLOR } from '../../styles/common';

const screen = Dimensions.get('window');

export const headerStyles = StyleSheet.create({
    container: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    koinijContainer: {
        flex: 1,
    },
    koinijText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLOR.black,
    },
    koinijAccent: {
        color: COLOR.primary,
    },
    notificationContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    notificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLOR.white,
    },
});

export const bodyStyles = StyleSheet.create({
    container: {
        flex: 0.85,
    }
});

export const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: screen.width * 0.10,
        paddingRight: screen.width * 0.10,
        backgroundColor: COLOR.white,
    },
});
