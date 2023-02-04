import * as React from 'react';
import { NativeBaseProvider, View, Text } from 'native-base'
import { WebView } from 'react-native-webview';


export default function WebViewScreen() {
    return (
        <WebView source={{ uri: 'https://larasiaksi.herokuapp.com/' }} />
    )
}
