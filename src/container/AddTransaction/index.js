import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from '../../component/Layout';

export default class AddTransaction extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation}>
                <Text>Add Transaction</Text>
            </Layout>
        );
    }
}
