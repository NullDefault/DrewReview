import {Box, Flex, Icon, Image, Link as ChakraLink, HStack} from '@chakra-ui/react';
import {VStack} from "@chakra-ui/layout";
import {ExternalLinkIcon, InfoIcon} from "@chakra-ui/icons";

export const Footer = (props) => <Flex as="footer" py="8rem" {...props}>
    <VStack spacing="24px">
        <HStack
            color="white"
        >
            <ChakraLink
                href="/about"
                flexGrow={2}
                >
                About <Icon as={ExternalLinkIcon} mx="2px"/>
            </ChakraLink>
            <ChakraLink
                isExternal
                href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                flexGrow={2}
            >
                University Archives <Icon as={InfoIcon} mx="2px"/>
            </ChakraLink>
        </HStack>
        <Box>
            <Image
                src="/favicon.ico"
                w={{base: "75px", sm: "125px"}}
            />
        </Box>
        <Box color="white">
            © 2021 Drew University
        </Box>
    </VStack>
</Flex>