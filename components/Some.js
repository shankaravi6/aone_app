import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Some extends React.Component {
    render() {
        return (
            <Text style={style1.textstyle}>{this.props.name}</Text>
        );
    }
}

const style1 = StyleSheet.create({
    textstyle: {
        fontSize: 40,
        color: "orange",
        backgroundColor: "white",
        paddingBottom: 10,
        marginBottom: 10
    }
});