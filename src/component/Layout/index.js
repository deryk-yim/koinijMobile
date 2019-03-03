import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Body from './Body';
import { layoutStyles } from './styles';

export default (props) => {
    const { navigation, children } = props;
    return (
        <View style={layoutStyles.container}>
            <Header navigation={navigation} />
            <Body>
                {children}
            </Body>
        </View>
    );
};

