import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';

import { optionStyles } from './styles';


export default class Options extends Component {
    static propTypes = {
        dataSource: PropTypes.arrayOf(
            PropTypes.objectOf(
                PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string,
                    PropTypes.bool,
                ])
            )
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    componentWillMount() {
        this.createList();
    }

    onSelect = (value) => {
        const { onSelect } = this.props;
        onSelect(value);
        this.closeModal();
    }
    
    showModal = () => {
        this.modal.open();
    }

    closeModal = () => {
        this.modal.close();
    }

    createList = () => {
        const { dataSource } = this.props;

        const listItems = dataSource.map((data) => {
            const { label, value } = data;
            return (
                <TouchableOpacity
                    key={value}
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}
                    onPress={() => this.onSelect(data)}
                >
                    <Text>{label}</Text>
                </TouchableOpacity>
            );
        });

        this.setState({ listItems });
    }
    
    render() {
        const { listItems } = this.state;
        return (
            <Modal
                ref={(ref) => { this.modal = ref; }}
                style={optionStyles.modal}
                position={'bottom'}
                backdrop={false}
            >
                <ScrollView>
                    {listItems}
                </ScrollView>
            </Modal>
        );
    }
}
