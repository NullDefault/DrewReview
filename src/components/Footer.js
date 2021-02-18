import {
  Box,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  HStack,
  Button,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { InfoIcon } from "@chakra-ui/icons";
import { useAuth } from "../lib/auth";
import { SideNav } from "./SideNav";

export const Footer = (props) => {
  const auth = useAuth();

  const sideNav = (
    <SideNav
      children={
        !auth?.user ? ( // if user is already logged in, show sign in button...
          <Button spacing={3} onClick={() => auth.signInWithGithub()}>
            {" "}
            Sign In{" "}
          </Button>
        ) : (
          <Button spacing={3} onClick={() => auth.signOut()}>
            {" "}
            Sign Out
          </Button>
        ) // otherwise the sign out button
      }
    />
  );

  return (
    <Flex as="footer" py="8rem" {...props}>
      <VStack spacing="24px">
        <HStack color="white">
          <ChakraLink
            isExternal
            href="https://www.drew.edu/library/2019/08/19/drew-publications/"
            flexGrow={2}
          >
            University Archives <Icon as={InfoIcon} mx="2px" />
          </ChakraLink>
        </HStack>
        <Box>
          <Image src="/favicon.ico" w={{ base: "75px", sm: "125px" }} />
        </Box>
        <Box color="white">© 2021 Drew University</Box>
        <Box>{sideNav}</Box>
      </VStack>
    </Flex>
  );
};
