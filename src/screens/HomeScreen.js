import * as React from 'react';
import { NativeBaseProvider, View, Text, Box, Flex, ScrollView } from 'native-base'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { VictoryPie, VictoryTooltip, VictoryChart, VictoryLine } from "victory-native";


export default function HomeScreen() {

    return (
        <ScrollView backgroundColor={'white'}>
            <View marginTop={20} style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#2C449B', width: 50, height: 50, borderRadius: 50 }}>
                        <Text>a</Text>
                    </View>
                    <Text fontSize={8}>Chat dengan Dokter </Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Toko Kesehatan</Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Janji Tamu Dokter</Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Layanan Medis</Text>
                </View>
            </View>

            <View marginTop={20} style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Chat dengan Dokter </Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Toko Kesehatan</Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Janji Tamu Dokter</Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text fontSize={8}>Layanan Medis</Text>
                </View>
            </View>


        </ScrollView>
    )
}
