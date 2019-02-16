import React from 'react';
import { View, StyleSheet } from 'react-native';

const bodyStyles = StyleSheet.create({
    container: {
        flex: 0.85,
    }
});

export default (props) => {
    const { children } = props;
    const { container } = bodyStyles;
    return (
        <View style={container}>
            {children}
        </View>
    );
};
