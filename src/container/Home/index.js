import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from '../../component/Layout';
import Form from '../../component/Form';

const { Select } = Form;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelect: {},
            secondSelect: {},
        };
    }

    onPress = (modal) => {
        this.refs[modal].showModal();
    }

    render() {
        const { navigation } = this.props;
        const { firstSelect, secondSelect } = this.state;

        return (
            <Layout navigation={navigation}>
                <Text>Body Content</Text>
                <Select.Input
                    value={firstSelect.label}
                    placeholder={'Select 1'}
                    onPress={() => this.onPress('Select1')}
                />
                <Select.Input
                    value={secondSelect.label}
                    placeholder={'Select 2'}
                    onPress={() => this.onPress('Select2')}
                />
                <Select.Options
                    ref={'Select1'}
                    onSelect={(data) => {
                        this.setState({ firstSelect: data });
                    }}
                    dataSource={
                        [
                            {
                                label: 'Label 1a',
                                value: 'val1a'
                            },
                            {
                                label: 'Label 2a',
                                value: 'val2a'
                            },
                            {
                                label: 'Label 3a',
                                value: 'val3a'
                            },
                            {
                                label: 'Label 4a',
                                value: 'val4a'
                            },
                            {
                                label: 'Label 5a',
                                value: 'val5a'
                            },
                            {
                                label: 'Label 6a',
                                value: 'val6a'
                            },
                            {
                                label: 'Label 7a',
                                value: 'val7a'
                            },
                            {
                                label: 'Label 8a',
                                value: 'val8a'
                            },
                        ]
                    }
                />
                <Select.Options
                    ref={'Select2'}
                    onSelect={(value) => {
                        this.setState({ secondSelect: value });
                    }}
                    dataSource={
                        [
                            {
                                label: 'Label 1b',
                                value: 'val1b'
                            },
                            {
                                label: 'Label 2b',
                                value: 'val2b'
                            },
                            {
                                label: 'Label 3b',
                                value: 'val3b'
                            },
                            {
                                label: 'Label 4b',
                                value: 'val4b'
                            },
                            {
                                label: 'Label 5b',
                                value: 'val5b'
                            },
                            {
                                label: 'Label 6b',
                                value: 'val6b'
                            },
                            {
                                label: 'Label 7b',
                                value: 'val7b'
                            },
                            {
                                label: 'Label 8b',
                                value: 'val8b'
                            },
                        ]
                    }
                />
            </Layout>
        );
    }
}
