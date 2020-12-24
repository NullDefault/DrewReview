import {Flex} from "@chakra-ui/react";

export const NavBarContainer = ({children, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={["gray.500", "gray.500", "blue.800", "blue.800"]}
            color={["blue.800", "blue.800", "blue.800", "blue.800"]}
            {...props}
        >
            {children}
        </Flex>
    );
};