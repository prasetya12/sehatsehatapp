import * as React from 'react';
import { NativeBaseProvider, View, Text, Box, useColorModeValue, Center, ScrollView, FlatList, HStack, VStack, Spacer, Badge } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const FirstRoute = () => {
    const data = [{
        "id": 1,
        "tanggal_surat": "2022-08-24",
        "perihal_surat": "KENPAT OKTOBER 2022",
        "nomor_surat": "800/345/2022",
        "jenis_surat_masuk": "Penting",
        "id_operator": 7,
        "pemroses": {
            "id": 16,
            "nip": "198511012004122001",
            "name": "NYOMAN SARI BUANA, S.STP,M.M",
            "jabatan": "Kepala Badan Kepegawaian dan pengembangan Sumber daya Manusia",
        },
    }]


    return (
        <FlatList data={data} renderItem={({ item }) => (
            <Box paddingTop={3} paddingBottom={3} style={{ backgroundColor: 'white' }} borderBottomWidth="1" borderColor="gray.300" pl={["0", "4"]} pr={["0", "5"]} py="2" paddingLeft={8} paddingRight={18}>
                <HStack space={[2, 3]} justifyContent="space-between">

                    <VStack style={{ width: 260 }}>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" style={{ fontSize: 12 }}>
                            {item.nomor_surat}
                        </Text>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold style={{ fontSize: 12 }}>
                            {item.pemroses.name}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} style={{ fontSize: 8 }}>
                            {item.pemroses.jabatan}
                        </Text>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="blue.600" style={{ fontSize: 12 }}>
                            Perihal: {item.perihal_surat}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.tanggal_surat}
                    </Text>
                </HStack>
            </Box>
        )} />
    )
}

const SecondRoute = () => {
    const data = [{
        "id": 1,
        "tanggal_surat": "2022-08-24",
        "perihal_surat": "KENPAT OKTOBER 2022",
        "nomor_surat": "800/345/2022",
        "jenis_surat_masuk": "Penting",
        "judul_surat": "judul",
        "id_operator": 7,
        "link_surat": "/upload/surat-keluar/surat-keluar-00ede33a8c14fea79c75e9ec73007276.pdf",
        "pettd": {
            "id": "12",
            "name": "NYOMAN SARI BUANA, S.STP,M.M",
            "nip": "198511012004122001",
            "jabatan": "Kepala Badan Kepegawaian dan pengembangan Sumber daya Manusia",

        },
        "is_ttd": 1
    }]
    return (
        <FlatList data={data} renderItem={({ item }) => (
            <Box paddingTop={3} paddingBottom={3} style={{ backgroundColor: 'white' }} borderBottomWidth="1" borderColor="gray.300" pl={["0", "4"]} pr={["0", "5"]} py="2" paddingLeft={8} paddingRight={18}>
                <HStack space={[2, 3]} justifyContent="space-between">

                    <VStack style={{ width: 260 }}>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" style={{ fontSize: 12 }}>
                            {item.nomor_surat}
                        </Text>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold style={{ fontSize: 12 }}>
                            {item.judul_surat}
                        </Text>

                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="blue.600" style={{ fontSize: 12 }}>
                            Perihal: {item.perihal_surat}
                        </Text>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} style={{ fontSize: 12 }}>
                            Ditandatangani oleh: {item.pettd.name}
                        </Text>
                        <Badge rounded="full" colorScheme="success" variant="subtle" width={120} marginTop={3}>
                            Selesai
                        </Badge>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.tanggal_surat}
                    </Text>
                </HStack>
            </Box>
        )} />
    )
};





const initialLayout = {
    width: Dimensions.get('window').width
};
const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,

});


export default function ProfilScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([{
        key: 'first',
        title: 'Surat Masuk'
    }, {
        key: 'second',
        title: 'Surat Keluar'
    },]);

    const renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return <Box flexDirection="row" backgroundColor={'white'}>
            {props.navigationState.routes.map((route, i) => {
                const opacity = props.position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
                });
                const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
                const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
                return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                    <Pressable onPress={() => {
                        console.log(i);
                        setIndex(i);
                    }}>
                        <Animated.Text style={{
                            color
                        }}>{route.title}</Animated.Text>
                    </Pressable>
                </Box>;
            })}
        </Box>;
    };



    return <TabView navigationState={{
        index,
        routes
    }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} />

}
