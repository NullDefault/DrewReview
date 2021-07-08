import { Flex } from "@chakra-ui/react";

export const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bg={"blue.800"}
      color={"blue.800"}
      borderBottomWidth={4}
      borderBottomColor={"gray.400"}
      {...props}
    >
      {children}
    </Flex>
  );
};
