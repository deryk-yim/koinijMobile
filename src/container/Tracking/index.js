import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from '../../component/Layout';

export default class Tracking extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation}>
                <Text>Tracking</Text>
            </Layout>
        );
    }
}
