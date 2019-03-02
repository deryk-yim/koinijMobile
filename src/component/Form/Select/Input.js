import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { formStyles } from '../styles';
import { TEXT } from '../../../styles/common';

export default class Input extends Component {
    static propTypes = {
        value: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
    }

    static defaultProps = {
        value: undefined,
        placeholder: undefined,
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { onPress, value, placeholder } = this.props;
        return (
            <View>
                <TouchableOpacity
                    style={formStyles.select}
                    onPress={onPress}
                >
                    <Text style={TEXT.input}>{value || placeholder}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
