import {Image, Box, Text, VStack, Center} from '@chakra-ui/react';

export const Logo = (props) => {
    return (
        <Box {...props}>
            <VStack>
                <a
                    href="https://www.drew.edu/1/"
                    target="_blank"
                >
                    <Image
                        src="/drew-logo.png"
                        color="green"
                        href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                    />
                </a>
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