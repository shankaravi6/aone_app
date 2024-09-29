import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import MainTabScreen from './screens/MainTabScreen';
import Details from './screens/Details';
import { DrawerContent } from './screens/DrawerContent';
import Dune from './screens/Dune';
import Notify from './screens/Notify';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
                <Drawer.Screen name="Details" component={Details} />
                <Drawer.Screen name="Notify" component={Notify} />
                <Drawer.Screen name="Dune" component={Dune} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;