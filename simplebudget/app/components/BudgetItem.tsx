import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
    label: string;
    percentage: number;
    amount: number;
}

const BudgetItem: React.FC<Props> = ({ label, percentage, amount }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={toggleExpand}>
            <Text style={styles.label}>
            {label}
            </Text>
            <View style={styles.rightContainer}>
            <Text style={styles.amount}>${amount}</Text>
            <FontAwesome name={expanded ? 'chevron-up' : 'chevron-down'} size={18} color="black" style={styles.icon} />
            </View>
        </TouchableOpacity>

        {expanded && (
            <View style={styles.details}>
            <Text style={styles.detailText}>• Estimated Expenses: ${(amount * 0.8).toFixed(2)}</Text>
            <Text style={styles.detailText}>• Remaining Balance: ${(amount * 0.2).toFixed(2)}</Text>
            </View>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
    },
    percentage: {
        textDecorationLine: 'underline',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: 10,
    },
    details: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 2,
    },
});

export default BudgetItem;