import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

interface AddProps {
    action: boolean;
}


const Add: React.FC<AddProps> = ({ action = false }) => {
    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                {action ? (
                    <TouchableOpacity
                        onPress={() => console.log('Add')}
                        >
                        <Text style={styles.text}>➕</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => console.log('Sub')}
                        >
                        <Text style={styles.text}>➖</Text>
                    </TouchableOpacity>
                )}
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Add;