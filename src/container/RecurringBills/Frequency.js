import React, { Component } from 'react';
import { Text, } from 'react-native';

import component from '../../component';

const { Layout } = component;

export default class Frequency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            category: {},
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation}>
                <Text>Hello</Text>
            </Layout>
        );
    }
}
