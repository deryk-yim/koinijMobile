import React from 'react';
import { TextInput as Input } from 'react-native';
import PropTypes from 'prop-types';
import { formStyles } from '../styles';

const TextInput = (props) => {
    const { value, onChangeText } = props;
    return (
        <Input
            style={formStyles.textInput}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
};

export default TextInput;

