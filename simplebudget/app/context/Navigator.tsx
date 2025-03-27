import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ProfileDrawer from "../components/ProfileDrawer";
import BudgetScreen from "../pages/BudgetApp";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();

const Navigator = () => {

return (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <ProfileDrawer visible={false} onClose={function (): void {
                throw new Error("Function not implemented.");
            } } {...props} />} // Custom side modal
        >
            <Drawer.Screen name="Home" component={Profile} />
            <Drawer.Screen name="Budget" component={BudgetScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;