import React, { useEffect, useRef } from 'react';
import { Animated, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ProfileDrawer: React.FC<Props> = ({ visible, onClose }) => {
    const slideAnim = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        if (visible) {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        } else {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
        }).start();
        }
    }, [visible]);

    return (
        <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose} />
        <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
            <SafeAreaView style={styles.safeArea}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Profile')}>
                <Text style={styles.optionText}>👤 View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Settings')}>
                <Text style={styles.optionText}>⚙️ Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => console.log('Stats')}>
                <Text style={styles.optionText}>📊 View Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    drawer: {
        position: 'absolute',
        right: 0,
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: -3, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    safeArea: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    option: {
        padding: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 18,
    },
    closeButton: {
        margin: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#5A9E5D',
        borderRadius: 8,
    },
    closeText: {
        fontSize: 16,
        color: 'white',
    },
});

export default ProfileDrawer;