import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, View, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SuratMasukScreen from '../screens/RumahSakitScreen'

import SuratKeluarScreen from '../screens/ArtikelScreen'
import ArsipScreen from '../screens/ProfileScreen'

import LoginScreen from '../screens/LoginScreen'
import Header from '../components/Header';
import WebViewScreen from '../screens/WebViewScreen'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailSuratKeluar from '../screens/DetailSuratKeluar';
import DetailSuratMasuk from '../screens/DetailSuratMasuk';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ArtikelScreen from '../screens/ArtikelScreen';
import RumahSakitScreen from '../screens/RumahSakitScreen';
import ProfilScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator()

function BottomNavigator() {
    return (
        <Tab.Navigator options={{ headerTitle: (props) => <Header {...props} /> }}>
            <Tab.Screen name="Beranda" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Artikel" component={ArtikelScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="reader" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Rumah Sakit" component={RumahSakitScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-business" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-chatbox-ellipses" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfilScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" color={color} size={size} />
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
                <Stack.Screen name='Detail_Surat_Keluar' component={DetailSuratKeluar} />
                <Stack.Screen name='Detail_Surat_Masuk' component={DetailSuratMasuk} />

                {/* <Stack.Screen
                    name="login"
                    component={LoginScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}
