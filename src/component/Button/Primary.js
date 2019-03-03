import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const Primary = (props) => {
    const { value, onPress } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <Text>{value}</Text>
        </TouchableOpacity>
    );
};

Primary.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onPress: PropTypes.func,
};

Primary.defaultProps = {
    value: 'Click me!',
    onPress: () => console.log('Pressed!'),
};

export default Primary;