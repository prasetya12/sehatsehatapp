import * as React from 'react';
import { Box, Text, HStack } from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Header() {
    return (
        <Box alignItems="center">
            <HStack >
                <HStack w={"50%"} >
                    <Text>Hi , Admin</Text>
                </HStack>
                <HStack w={"50%"} direction="row-reverse">
                    <FontAwesome name="bell-o" color={'primary.400'} size={20} />
                </HStack>
            </HStack>

        </Box>
    );
}

