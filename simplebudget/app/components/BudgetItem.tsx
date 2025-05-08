import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';
import { useBudgetContext } from '../context/BudgetContext';

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
    const { budgetItems, incomeItems } = useBudgetContext();

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    const isIncomeCategory = label.toLowerCase() === 'income';

    const entries = isIncomeCategory
        ? incomeItems
        : budgetItems.filter(item => item.category.toLowerCase() === label.toLowerCase());

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={toggleExpand}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.rightContainer}>
            <Text style={styles.amount}>${amount.toFixed(0)}</Text>
            <FontAwesome
                name={expanded ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="black"
                style={styles.icon}
            />
            </View>
        </TouchableOpacity>

        {expanded && (
            <View style={styles.details}>
            {!isIncomeCategory && (
                <>
                <Text style={styles.detailText}>
                    • Estimated Expenses: ${(amount * 0.8).toFixed(0)}
                </Text>
                <Text style={styles.detailText}>
                    • Remaining Balance: ${(amount * 0.2).toFixed(0)}
                </Text>
                </>
            )}

            {entries.length > 0 ? (
                <ScrollView style={styles.entryScroll}>
                {entries.map(entry => (
                    <View key={entry.id} style={styles.entryItem}>
                    <View style={styles.entryHeader}>
                        <Text style={styles.entryName}>{entry.name}</Text>
                        <Text style={styles.entryAmount}>${entry.amount.toFixed(0)}</Text>
                    </View>
                    <Text style={styles.entryMeta}>
                        {new Date(entry.date).toLocaleDateString()}
                        {entry.paymentMethod ? ` • ${entry.paymentMethod}` : ''}
                        {entry.isRecurring ? ' • Recurring' : ''}
                    </Text>
                    {entry.frequency && (
                        <Text style={styles.entryMeta}>Frequency: {entry.frequency}</Text>
                    )}
                    {entry.notes && <Text style={styles.entryNotes}>Note: {entry.notes}</Text>}
                    </View>
                ))}
                </ScrollView>
            ) : (
                <Text style={styles.emptyText}>
                {isIncomeCategory ? 'No income entries yet.' : 'No entries in this category yet.'}
                </Text>
            )}
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
        maxHeight: 250,
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 6,
    },
    entryScroll: {
        marginTop: 8,
    },
    entryItem: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 6,
        borderRadius: 5,
        borderLeftWidth: 4,
        borderLeftColor: '#5A9E5D',
    },
    entryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    entryName: {
        fontWeight: '600',
    },
    entryAmount: {
        fontWeight: '600',
        color: '#333',
    },
    entryMeta: {
        fontSize: 12,
        color: '#666',
    },
    entryNotes: {
        fontSize: 12,
        color: '#444',
        marginTop: 2,
    },
    emptyText: {
        marginTop: 8,
        fontStyle: 'italic',
        color: '#666',
    },
});

export default BudgetItem;