// SettingItem.tsx
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

type SettingType = 'string' | 'number' | 'boolean';

interface SettingItemProps<T extends SettingType> {
    title: string;
    type: T;
    value: T extends 'boolean' ? boolean : T extends 'number' ? number : string;
    onChange: (value: T extends 'boolean' ? boolean : T extends 'number' ? number : string) => void;
    }

function SettingItem<T extends SettingType>({
    title,
    value,
    type,
    onChange,
    }: SettingItemProps<T>) {
    const [isEditing, setIsEditing] = useState(false);
    const [temp, setTemp] = useState(value.toString());

    const handleEditEnd = () => {
        if (type === 'number') {
        const parsed = parseFloat(temp);
        if (!isNaN(parsed)) onChange(parsed as any);
        } else {
        onChange(temp as any);
        }
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {type === 'boolean' ? (
            <Switch
            value={value as boolean}
            onValueChange={(val) => onChange(val as any)}
            />
        ) : isEditing ? (
            <TextInput
            style={styles.input}
            value={temp}
            onChangeText={setTemp}
            onBlur={handleEditEnd}
            onSubmitEditing={handleEditEnd}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            autoFocus
            />
        ) : (
            <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.value}>{value.toString()}</Text>
            </TouchableOpacity>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    title: {
        color: '#555',
        fontSize: 14,
    },
    value: {
        fontSize: 16,
        color: '#000',
        marginTop: 4,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        paddingVertical: 2,
        marginTop: 4,
    },
});

export default SettingItem;