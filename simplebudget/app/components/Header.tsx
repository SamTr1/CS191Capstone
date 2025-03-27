import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProfileDrawer from './ProfileDrawer';

const Header: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
        <View style={styles.header}>
            <Text style={styles.title}>The Budget App</Text>
            <TouchableOpacity onPress={() => setIsDrawerOpen(true)}>
            <FontAwesome name="user-circle-o" size={28} color="black" />
            </TouchableOpacity>
        </View>
        <ProfileDrawer visible={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5A9E5D',
        padding: 15,
        paddingTop: 20,
        },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Header;