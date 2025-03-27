import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useBudgetContext } from '../context/BudgetContext';


    const CashOnHand = () => {

    const { cashOnHand } = useBudgetContext();

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Cash on Hand: ${cashOnHand}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DFF5DA',
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default CashOnHand;