import * as React from 'react';
import { Button, View, Text, FlatList, Box, HStack, VStack, Spacer, Badge, Avatar, Flex, ScrollView } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailSuratKeluar({ navigation: { goBack } }) {
    return (
        <ScrollView>
            <Box paddingLeft={5} flexDirection={'row'} backgroundColor={'white'} height={50} width={'100%'} alignItems={'center'}>
                <Icon name='chevron-left' size={20} onPress={() => goBack()}></Icon>
                <Text marginLeft={5} fontWeight={500} fontSize={16}>Detail Surat Keluar</Text>
            </Box>
            <ScrollView paddingBottom={20}>
                <View padding={5} backgroundColor={'white'}>
                    <Box>
                        <Text fontWeight={500}>Tanggal Surat</Text>
                        <Text>2022-08-23</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text fontWeight={500}>Perihal</Text>
                        <Text>Surat Masuk Test</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text fontWeight={500}>Nomor Surat</Text>
                        <Text>12/012/12</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text fontWeight={500}>Judul</Text>
                        <Text>Test Surat Kaluar</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text fontWeight={500}>Dibuat Oleh</Text>
                        <Text>operator-1</Text>
                        <Text>Tuesday,23 Agustus 2022</Text>
                    </Box>
                    <Box marginTop={2}>
                        <Text fontWeight={500}>Lampiran Surat</Text>
                        <Avatar source={require('../assets/pdf.png')}></Avatar>
                        <Button onPress={() => console.log("hello world")}>Lihat</Button>
                    </Box>
                </View>
                <Flex marginTop={5} direction={'row'} paddingLeft={5} paddingRight={5} >
                    <Flex padding={2} flex={8} alignItems={'center'} backgroundColor={'white'}>
                        <Text fontWeight={500}>Pemaraf</Text>
                        <Text fontSize={12} textAlign={'center'}>Kepala Bidang Pengembangan Aperatur</Text>
                        <Text></Text>
                        <Text></Text>

                        <Text>
                            Rini Juniarti
                        </Text>
                        <Text>
                            1928872199
                        </Text>
                    </Flex>
                    <Spacer flex={1} />
                    <Flex padding={2} flex={8} alignItems={'center'} backgroundColor={'white'}>
                        <Text fontWeight={500}>Pemaraf</Text>
                        <Text fontSize={12} textAlign={'center'}>Kepala Bidang Pengembangan Aperatur</Text>
                        <Text></Text>
                        <Text></Text>

                        <Text>
                            Rini Juniarti
                        </Text>
                        <Text>
                            1928872199
                        </Text>
                    </Flex>
                </Flex>
                <Flex marginTop={5} alignItems={'center'}>
                    <Flex backgroundColor={'white'} width={200} alignItems={'center'}>
                        <Text fontWeight={500} textAlign={'center'}>Penandatangan</Text>
                        <Text fontSize={12} textAlign={'center'}>Kepala Bidang Pengembangan Aperatur</Text>
                        <Text></Text>
                        <Text></Text>

                        <Text>
                            Rini Juniarti
                        </Text>
                        <Text>
                            1928872199
                        </Text>
                    </Flex>
                </Flex>
            </ScrollView>
        </ScrollView>
    )
}