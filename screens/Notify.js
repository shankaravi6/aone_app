import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Notify = () => {
    return (
        <View style={styles.container}>
            <Button title="Click" onPress={() => alert('Hello!')}></Button>
        </View>
    );
};

export default Notify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})