import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SettingsGroupProps {
    title: string;
    children: React.ReactNode;
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({ title, children }) => {
    return (
        <View style={styles.group}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inner}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    group: {
        marginBottom: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        marginBottom: 8,
        paddingLeft: 4,
    },
    inner: {
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
});

export default SettingsGroup;