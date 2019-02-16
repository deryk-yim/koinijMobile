import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from '../../component/Layout';

export default class Register extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation}>
                <Text>Register</Text>
            </Layout>
        );
    }
}
