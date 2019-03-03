import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { bodyStyles } from './styles';

const Body = (props) => {
    const { children } = props;
    return (
        <View style={bodyStyles.container}>
            {children}
        </View>
    );
};

Body.propType = {
    children: PropTypes.node,
};

export default Body;
