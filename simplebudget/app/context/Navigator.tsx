import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BudgetApp from '../pages/BudgetApp';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Budget">
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Budget" component={BudgetApp} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;