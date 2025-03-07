import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MidProps {
    num: number;
}

const Mid: React.FC<MidProps> = (props) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>{props.num} Left</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgrey',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Mid;