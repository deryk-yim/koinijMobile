import React, { Component } from 'react';
import { Text, } from 'react-native';

import constant from '../../constant';
import component from '../../component';

const { Layout, Form } = component;
const { TextInput, Select } = Form;

// import Layout from '../../component/Layout';
// import TextInput from '../../component/Form/TextInput';
// import Select from '../../component/Form/Select';

export default class Details extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        name: '',
        category: {},
      };
    }

    onTextInputChange = (value) => {
        this.setState({ name: value });
    }

    onModalOpen = (modal) => {
        this.refs[modal].showModal();
    }

    onSelect = (data) => {
        this.setState({ category: data });
    }
    
    render() {
        const { navigation } = this.props;
        const { name, category } = this.state;
        return (
            <Layout navigation={navigation}>
                <Text>{this.state.name}</Text>
                <Text>{this.state.category.label}</Text>
                <TextInput
                    value={name}
                    onChangeText={this.onTextInputChange}
                />
                <Select.Input
                    value={category.label}
                    placeholder={'Category'}
                    onPress={() => this.onModalOpen('categorySelect')}
                />
                <Select.Options
                    ref={'categorySelect'}
                    onSelect={this.onSelect}
                    dataSource={constant.CATEGORY}
                />
            </Layout>
        );
    }
}
