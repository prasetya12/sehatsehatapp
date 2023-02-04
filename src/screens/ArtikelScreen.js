import * as React from 'react';
import { NativeBaseProvider, View, Text, FlatList, Box, HStack, VStack, Spacer, Badge } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native'


export default function ArtikelScreen({ navigation }) {
    const data = [{
        "id": 1,
        "tanggal_surat": "2022-08-24",
        "asal_surat": "DKPP",
        "perihal_surat": "Permohonan Data Kependudukan",
        "nomor_surat": "201/XX/08/2022",
        "jenis_surat_masuk": "Penting",
        "id_operator": 7,
        "link_file": "/upload/surat-masuk/surat_masuk-20220824-1.pdf",
        "assign_to": {
            "id": 16,
            "nip": "198511012004122001",
            "name": "NYOMAN SARI BUANA, S.STP,M.M",
            "email": "kaopd.1@gmail.com",
            "jabatan": "Kepala Badan Kepegawaian dan pengembangan Sumber daya Manusia",
            "role_id": 3,
            "level": 3
        },
        "is_disposisi": null,
        "is_proses": null,
        "is_arsip": null,
        "is_deleted": null,
        "created_at": "2022-08-24 12:31:15",
        "created_by": 7,
        "created_by_name": "Amier Siregar, S.Crus",
        "created_by_nip": "100000000000000001",
        "created_by_jabatan": "Operator",
        "disposisi": [],
        "pemroses": []
    }, {
        "id": 2,
        "tanggal_surat": "2022-08-24",
        "asal_surat": "DKPP",
        "perihal_surat": "KENPAT OKTOBER 2022",
        "nomor_surat": "800/345/2022",
        "jenis_surat_masuk": "Penting",
        "id_operator": 7,
        "link_file": "/upload/surat-masuk/surat_masuk-20220824-1.pdf",
        "assign_to": {
            "id": 16,
            "nip": "198511012004122001",
            "name": "NYOMAN SARI BUANA, S.STP,M.M",
            "email": "kaopd.1@gmail.com",
            "jabatan": "Kepala Badan Kepegawaian dan pengembangan Sumber daya Manusia",
            "role_id": 3,
            "level": 3
        },
        "is_disposisi": null,
        "is_proses": null,
        "is_arsip": null,
        "is_deleted": null,
        "created_at": "2022-08-24 12:31:15",
        "created_by": 7,
        "created_by_name": "Amier Siregar, S.Crus",
        "created_by_nip": "100000000000000001",
        "created_by_jabatan": "Operator",
        "disposisi": [],
        "pemroses": []
    }]
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => (
                <TouchableHighlight onPress={() => navigation.push('Detail_Surat_Keluar')}>
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
                                    {item.assign_to.name}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} style={{ fontSize: 8 }}>
                                    {item.assign_to.jabatan}
                                </Text>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="blue.600" style={{ fontSize: 12 }}>
                                    Perihal: {item.perihal_surat}
                                </Text>
                                <Badge rounded="full" colorScheme="warning" variant="subtle" width={120} marginTop={3}>
                                    Belum diparaf 1
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
                </TouchableHighlight>
            )} />
        </View>
    )
}
