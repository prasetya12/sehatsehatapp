import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, View, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen'
import SuratMasukScreen from '../screens/SuratMasukScreen'
import SuratKeluarScreen from '../screens/SuratKeluarScreen'
import ArsipScreen from '../screens/ArsipScreen'
import LoginScreen from '../screens/LoginScreen'
import Header from '../components/Header';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';




const Tab = createBottomTabNavigator()

function BottomNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={DashboardScreen} options={{
                headerTitle: (props) => <Header {...props} />,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Surat Masuk" component={SuratMasukScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="download" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Surat Keluar" component={SuratKeluarScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="upload" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Arsip" component={ArsipScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="box" color={color} size={size} />
                ),
            }} />



        </Tab.Navigator>
    )
}


const Stack = createNativeStackNavigator();
export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Dashboard" component={BottomNavigator} />

                {/* <Stack.Screen
                    name="login"
                    component={LoginScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}
