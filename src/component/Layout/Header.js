import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Button from '../Button';

import { headerStyles } from './styles';

export default (props) => {
    const { navigation } = props;

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.koinijContainer}>
                <Text style={headerStyles.koinijText} onPress={() => navigation.openDrawer()} >
                    Koinij<Text style={headerStyles.koinijAccent}>.</Text>
                </Text>
            </View>
            <View style={headerStyles.notificationContainer}>
                <Button.Circular 
                    size={30}
                    backgroundColor={'#775FFB'}
                >
                    <Text style={headerStyles.notificationText}>3</Text>
                </Button.Circular>
            </View>
        </View>
    );
};

