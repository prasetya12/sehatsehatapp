import * as React from 'react';
import { NativeBaseProvider, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from './src/routes'
import RootNavigator from './src/routes'


export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>


  )
}