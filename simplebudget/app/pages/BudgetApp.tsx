import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddButton } from '../components/AddButton';
import BudgetItem from '../components/BudgetItem';
import CashOnHand from '../components/CashOnHand';
import Header from '../components/Header';
import { BudgetContextProvider, useBudgetContext } from '../context/BudgetContext';


const BudgetApp: React.FC = () => {
    

    const { needPercent, wantPercent, savingPercent, totalIncome } = useBudgetContext();
    

    const budgetData = [
        { label: 'Total Planned Income', percentage: 100, amount: totalIncome },
        { label: 'Needs', percentage: needPercent, amount: totalIncome * (needPercent / 100) },
        { label: 'Wants', percentage: wantPercent, amount: totalIncome * (wantPercent / 100) },
        { label: 'Savings', percentage: savingPercent, amount: totalIncome * (savingPercent / 100) },
    ];

    return (
        <SafeAreaProvider>
            <BudgetContextProvider>
                <View style={styles.container}>
                    <Header/>
                    <CashOnHand />
                    <ScrollView style={styles.content}>
                        {budgetData.map((item, index) => (
                        <BudgetItem key={index} label={item.label} percentage={item.percentage} amount={item.amount} />
                        ))}
                    </ScrollView>
                    <AddButton />
                </View>

            </BudgetContextProvider>


        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    content: {
        marginTop: 10,
    },
});

export default BudgetApp;