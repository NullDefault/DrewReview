import {Image, Box, Text, VStack, Center} from '@chakra-ui/react';

export const Logo = (props) => {
    return (
        <Box {...props}>
            <VStack>
                <Image
                    src="/drew-logo.png"
                    color="green"
                />
                <Center>
                    <Text color="white"
                          fontSize={{base: "md", sm: "xl"}}
                          fontWeight="light"
                          textTransform="uppercase"
                    >
                        Review
                    </Text>
                </Center>
            </VStack>
        </Box>
    )
}