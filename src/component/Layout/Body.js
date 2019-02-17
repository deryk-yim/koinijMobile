import React from 'react';
import { View } from 'react-native';
import { bodyStyles } from './styles';

export default (props) => {
    const { children } = props;
    return (
        <View style={bodyStyles.container}>
            {children}
        </View>
    );
};
