import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import DropDown from "./DropDown";

const ItemBox = () => {

    return (
        <View style={styles.containerBase}>
            <View style={styles.container}>
                <Text style={styles.grayBox}>$500</Text>
                <Text style={styles.greenBox}>Food</Text>
            </View>
            <DropDown />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    containerBase: {
        backgroundColor: "lightblue",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    grayBox: {
        backgroundColor: "gray",
        color: "white",
        padding: 10,
        flex: 1,
        textAlign: "center",
        marginRight: 5,
        borderRadius: 5,
    },
    greenBox: {
        backgroundColor: "green",
        color: "white",
        padding: 10,
        flex: 1,
        textAlign: "center",
        marginLeft: 5,
        borderRadius: 5,
    },
    dropBox: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
    },
});

export default ItemBox;