import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Details from './Details';
import Profile from './Profile';
import Explore from './Explore';
import Notify from "./Notify";
import Dune from "./Dune";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3399ff"
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarColor: '#ffffff',
                tabBarIcon: ({ focused }) => (
                    <Icon name="ios-home-outline" style={{ color: focused ? '#3399ff' : 'grey' }} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
                tabBarLabel: 'Videos',
                tabBarColor: '#ffffff',
                tabBarIcon: ({ focused }) => (
                    <Icon name="ios-videocam-outline" style={{ color: focused ? '#3399ff' : 'grey' }} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="Notify"
            component={Details}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#ffffff',
                tabBarIcon: ({ focused }) => (
                    <Icon name="ios-newspaper-outline" style={{ color: focused ? '#3399ff' : 'grey' }} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#ffffff',
                tabBarIcon: ({ focused }) => (
                    <Icon name="ios-person-outline" style={{ color: focused ? '#3399ff' : 'grey' }} size={26} />
                ),
            }}
        />


    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home"
            component={Home}
            options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} style={{ marginLeft: 10 }} backgroundColor="#fff" color="black"
                        onPress={() => { navigation.openDrawer() }}></Icon.Button>
                )
            }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator>
        <DetailsStack.Screen name="Details" component={Details}
            options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} style={{ marginLeft: 10 }} backgroundColor="#fff" color="black"
                        onPress={() => { navigation.openDrawer() }}></Icon.Button>
                )
            }}
        />
    </DetailsStack.Navigator>
);

const NotifyStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator>
        <DetailsStack.Screen name="Notify" component={Notify}
            options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} style={{ marginLeft: 10 }} backgroundColor="#fff" color="black"
                        onPress={() => { navigation.openDrawer() }}></Icon.Button>
                )
            }}
        />
    </DetailsStack.Navigator>
);
