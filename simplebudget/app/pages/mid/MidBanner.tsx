import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Add from './Add';
import Mid from './Mid';

const MidBanner = () => {
    
    return (
        <View style={styles.container}>
            <Add action={false} />
            <Mid num={0}/>
            <Add action={true}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.80,
        borderRadius: 15,
        margin: 10,
        backgroundColor: "lightgreen",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5, // Shadow for Android
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    });

export default MidBanner;