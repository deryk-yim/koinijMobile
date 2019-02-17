import { StyleSheet, Dimensions } from 'react-native';
import { COLOR } from '../../styles/common';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
    safeAreaContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingLeft: SCREEN_WIDTH * 0.05,
        paddingRight: SCREEN_WIDTH * 0.05,
    }
});
