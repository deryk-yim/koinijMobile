import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from './Header';
import Body from './Body';
import { layoutStyles } from './styles';

export default (props) => {
    const { navigation, children } = props;
    return (
        <SafeAreaView style={layoutStyles.safeAreaContainer}>
            <View style={layoutStyles.container}>
                <Header navigation={navigation} />
                <Body>
                    {children}
                </Body>
            </View>
        </SafeAreaView>
    );
};

