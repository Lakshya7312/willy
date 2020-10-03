import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
    }
})