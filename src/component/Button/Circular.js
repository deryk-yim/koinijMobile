import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Circular = (props) => {
    const { 
        backgroundColor,
        size,
        children,
        onPress,
        style,
    } = props;
    const circularBtnStyles = StyleSheet.create({
        btn: {
            backgroundColor,
            height: size,
            width: size,
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    const { btn } = circularBtnStyles;
    return (
        <TouchableOpacity style={[btn, style]} onPress={onPress}>
            { children }
        </TouchableOpacity>
    );
};
export default Circular;

Circular.propTypes = {
    size: PropTypes.number,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    onPress: PropTypes.func,
    style: PropTypes.object,
};

Circular.defaultProps = {
    size: 50,
    backgroundColor: '#FFFFFF',
    children: null,
    onPress() { console.log('Pressed!'); },
};
