import {Box, Flex, Icon, Image, Link as ChakraLink} from '@chakra-ui/react';
import {VStack} from "@chakra-ui/layout";
import {ExternalLinkIcon} from "@chakra-ui/icons";

export const Footer = (props) => <Flex as="footer" py="8rem" {...props}>
    <VStack spacing="24px">
        <Box>
            <ChakraLink
                isExternal
                href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                color="white"
                flexGrow={2}
            >
                University Archives <Icon as={ExternalLinkIcon} mx="2px"/>
            </ChakraLink>
        </Box>
        <Box>
            <Image
                src="/favicon.ico"
                w={{base: "75px", sm: "125px"}}
            />
        </Box>
    </VStack>
</Flex>