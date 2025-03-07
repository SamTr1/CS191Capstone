import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopBanner = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Simple Budget</Text>
        <Text>⚙</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    });

export default TopBanner;