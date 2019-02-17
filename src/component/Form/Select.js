import React from 'react';
import { View, Picker } from 'react-native';
import { formStyles } from './styles';

export default (props) => {
    const { value, onValueChange } = props;
    return (
        <View>
            <Picker
                style={formStyles.select}
                value={value}
                onValueChange={onValueChange()}
            >
                <Picker.item label="item 1" value="item1" />
                <Picker.item label="item 2" value="item2" />
            </Picker>
        </View>
    );
};
