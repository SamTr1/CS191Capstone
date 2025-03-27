import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SettingsGroup from '../components/SettingGroup';
import SettingItem from '../components/SettingItem';
import { useBudgetContext } from '../context/BudgetContext';

const SettingsScreen: React.FC = () => {
    const {
    cashOnHand,
    needPercent,
    wantPercent,
    savingPercent,
    totalIncome,
    taxPercentage,
    setCashOnHand,
    setNeedPercent,
    setWantPercent,
    setSavingPercent,
    setTotalIncome,
    setTaxPercentage
    } = useBudgetContext();

    return (
        <ScrollView style={styles.container}>

        <SettingsGroup title="Account">
            <SettingItem
            title="Username"
            type="number"
            value={totalIncome}
            onChange={setTotalIncome}
            />
            <SettingItem
            title="Email"
            type="number"
            value={cashOnHand}
            onChange={setCashOnHand}
            />
        </SettingsGroup>


        <SettingsGroup title="Income">
            <SettingItem
            title="Total MonthlyIncome"
            type="number"
            value={totalIncome}
            onChange={setTotalIncome}
            />
        </SettingsGroup>

        <SettingsGroup title="Budget Distribution">
            <SettingItem
            title="Needs %"
            type="number"
            value={needPercent}
            onChange={setNeedPercent}
            />
            <SettingItem
            title="Wants %"
            type="number"
            value={wantPercent}
            onChange={setWantPercent}
            />
            <SettingItem
            title="Savings %"
            type="number"
            value={savingPercent}
            onChange={setSavingPercent}
            />
        </SettingsGroup>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
});

export default SettingsScreen;