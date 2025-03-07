import React from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import DropDown from "./DropDown";

interface MyFirstProps {
    num: number;
    cat: string;
}

const MyFirst: React.FC<MyFirstProps> = (props) => {

    return (
        <View style={styles.containerBase}>
            <View style={styles.container}>
                <View style={styles.grayBox}>
                    <Text style={styles.text}>{props.num}</Text>
                </View>
                <View style={styles.greenBox}>
                    <Text style={styles.text}>{props.cat}</Text>
                </View>
            </View>
            <View style={styles.containerDrop}>
                <DropDown />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "black",
        margin: 25,
    },

    containerDrop: {
        width: Dimensions.get("window").width * 0.75,
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        position: "absolute",
        top: Dimensions.get("window").height * 0.25,
    },
    container: {
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
    },
    containerBase: {
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.375,
        backgroundColor: "lightblue",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
    },
    grayBox: {
        height: Dimensions.get("window").width * 0.25,
        backgroundColor: "gray",
        padding: 10,
        flex: 1,
        textAlign: "center",
        marginRight: 5,
        borderRadius: 5,
    },
    greenBox: {
        height: Dimensions.get("window").width * 0.25,
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
        borderRadius: 5,
    },
});

export default MyFirst;