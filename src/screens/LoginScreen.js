import * as React from 'react';
import { View, Text, Button, Box, Container, Image, Flex, Center, Input, FormControl } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function LoginScreen({ navigation }) {
    return (
        <View padding={30} height={'100%'}>

            <Flex mt={37} alignItems="center">
                <Box >
                    <Text fontSize={26} fontWeight={500}>
                        SI-AKSI

                    </Text>
                </Box>
                <Image marginTop={6} source={require('../assets/logo.png')} alt="Alternate Text" size="md" />
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
                    <Button onPress={() => navigation.push('Dashboard', { screen: 'Home' })} w="100%">Login</Button>
                </Box>
            </View>

        </View>

        // <Button onPress={() => navigation.push('Dashboard', { screen: 'Home' })}>Click Me</Button>

    )
}
