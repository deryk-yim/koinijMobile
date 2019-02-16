import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Button from '../Button';

const headerStyles = StyleSheet.create({
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
        color: '#000000',
    },
    koinijAccent: {
        color: '#775FFB',
    },
    notificationContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    notificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default (props) => {
    const {
        container,
        koinijContainer,
        koinijText,
        koinijAccent,
        notificationContainer,
        notificationText,
    } = headerStyles;

    const { navigation } = props;

    return (
        <View style={container}>
            <View style={koinijContainer}>
                <Text style={koinijText} onPress={() => navigation.openDrawer()} >
                    Koinij<Text style={koinijAccent}>.</Text>
                </Text>
            </View>
            <View style={notificationContainer}>
                <Button.Circular 
                    size={30}
                    backgroundColor={'#775FFB'}
                >
                    <Text style={notificationText}>3</Text>
                </Button.Circular>
            </View>
        </View>
    );
};

