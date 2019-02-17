import React from 'react';
import { View, TextInput } from 'react-native';
import { formStyles } from './styles';

export default (props) => {
    const { value, onChangeText } = props;
    return (
        <View>
            <TextInput
                style={formStyles.textInput}
                value={value}
                onChangeText={onChangeText()}
            />
        </View>
    );
};
