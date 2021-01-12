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
            bg={"blue.800"}
            color={"blue.800"}
            style={{
                position: "absolute",
                top: 0
            }}
            {...props}
        >
            {children}
        </Flex>
    );
};