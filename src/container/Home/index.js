import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from '../../component/Layout';
import Form from '../../component/Form';

export default class Login extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation}>
                <Text>Body Content</Text>
                <Form.TextInput 
                    value={'CAT'}
                    onChangeText={(text) => console.log(text)}
                />
                <Form.Select
                    onValueChange={(value) => console.log(value)}
                />
            </Layout>
        );
    }
}
