import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TotalBanner = () => {
    return (
        <View>
        <Text style={styles.text}>The Total</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#333',
    },
    });

export default TotalBanner;