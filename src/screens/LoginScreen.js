import * as React from 'react';
import { View, Text, Button, Box, Container, Image, Flex, Center, Input, FormControl } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign';


export default function LoginScreen({ navigation }) {
    return (
        <View padding={30} height={'100%'} backgroundColor={'white'}>

            <Flex mt={37} alignItems="center">
                <Box >
                    <Text fontSize={30} fontWeight={500} color={"#1d1b84"}>
                        SehatSehat

                    </Text>
                </Box>
                {/* <Image marginTop={6} source={require('../assets/logo.png')} alt="Alternate Text" size="md" /> */}
            </Flex>
            <View marginTop={16}>
                <Box alignItems="center">
                    <FormControl w="100%">
                        <FormControl.Label>Username/Email</FormControl.Label>
                        <Input placeholder="Masukan Username/Email" />
                    </FormControl>
                </Box>
                <Box mt={4} alignItems="center">
                    <FormControl w="100%">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input placeholder="Masukan Password" type='password' />
                    </FormControl>
                </Box>
                <Box alignItems="center" marginTop={16}>
                    <Button backgroundColor={"#1d1b84"} onPress={() => navigation.push('Dashboard', { screen: 'Home' })} w="100%">Login</Button>
                </Box>
                <Box alignItems="center" marginTop={5}>
                    <Button backgroundColor={"white"} w="100%" style={{ borderWidth: 1, borderColor: 'grey' }}>
                        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <Image source={require('../assets/icon-google.png')} alt="Alternate Text" width={4} height={4} />

                            <Text color={'black'} marginLeft={2}>Login dengan akun Google</Text>
                        </Box>
                    </Button>
                </Box>
                <Box marginTop={10} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    Belum punya akun ? <Text fontWeight={'bold'}>Daftar</Text>
                </Box>
            </View>

        </View>

        // <Button onPress={() => navigation.push('Dashboard', { screen: 'Home' })}>Click Me</Button>

    )
}
