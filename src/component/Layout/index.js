import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import Header from './Header';
import Body from './Body';

const SCREEN_WIDTH = Dimensions.get('window').width;

const layoutStyles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingLeft: SCREEN_WIDTH * 0.05,
        paddingRight: SCREEN_WIDTH * 0.05,
    }
});

export default (props) => {
    const { navigation, children } = props;
    const { container } = layoutStyles;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={container}>
                <Header navigation={navigation} />
                <Body>
                    {children}
                </Body>
            </View>
        </SafeAreaView>
    );
};

