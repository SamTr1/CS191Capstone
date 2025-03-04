import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DropDown = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const budgetDetails = [
        { id: "1", label: "Groceries", amount: "$120" },
        { id: "2", label: "Restaurants", amount: "$80" },
        { id: "3", label: "Coffee", amount: "$40" },
        { id: "4", label: "Snacks", amount: "$30" },
        { id: "5", label: "Groceries", amount: "$120" },
        { id: "6", label: "Restaurants", amount: "$80" },
        { id: "7", label: "Coffee", amount: "$40" },
        { id: "8", label: "Snacks", amount: "$30" },
    ];

    const firstItem = budgetDetails[0];
    const remainingItems = budgetDetails.slice(1);


    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => setIsExpanded(!isExpanded)}
            >
            <Text>
                <Text>{isExpanded ? "" : budgetDetails[0].amount + " "}</Text>
                <Text>{isExpanded ? "Tap to Collapse" : budgetDetails[0].label}</Text>
            </Text>
            </TouchableOpacity>
    
        {isExpanded && (
            <FlatList
                data={budgetDetails}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                    <Text style={styles.listText}>{item.label}</Text>
                    <Text style={styles.amountText}>{item.amount}</Text>
                    </View>
                )}
                style={styles.dropdown}
                />
            )}
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
    },
    listText: {
        fontSize: 16,
        color: "#333",
    },
    amountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    dropdown: {
        backgroundColor: "#ddd",
        marginTop: 5,
        borderRadius: 5,
        padding: 10,
        maxHeight: 150,
        flexDirection: "row",
        flex: 1,
        overflow: "scroll",

    },
    dropBox: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
    },
});

export default DropDown;