import * as React from 'react';
import { NativeBaseProvider, View, Text } from 'native-base'
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


export default function DashboardScreen() {
    const data_ = [
        {
            name: "Jawa Barat",
            population: 48.0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "Jawa Timur",
            population: 39.2,
            color: "red",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "Jawa Tengah",
            population: 34.2,
            color: "yellow",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "Sumatera Utara",
            population: 14.2,
            color: "orange",
            legendFontColor: "black",
            legendFontSize: 11
        },
        {
            name: "Banten",
            population: 12.4,
            color: "green",
            legendFontColor: "black",
            legendFontSize: 11
        }
    ]
    return (
        <View>
            <Text>DashboardScreen</Text>
            <PieChart
                data={data_}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                chartConfig={{
                    color: (opacity = 1) => `white`,
                    labelColor: (opacity = 1) => `white`,
                    style: {
                        borderRadius: 16,
                        color: 'red'
                    }
                }}
                accessor="population"
                paddingLeft="15"
                absolute
                style={{
                    marginVertical: 8,
                    borderRadius: 16,

                }}
                hasLegend={false}
            />
        </View>
    )
}
