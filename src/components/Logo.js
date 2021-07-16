import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Box {...props}>
      <VStack>
        <Box
          _focus={{}}
          _active={{}}
          _highlighted={{}}
          _grabbed={{}}
          _pressed={{}}
          minH="45px"
          minW="188px"
        >
          <a href="https://www.drew.edu/1/" target="_blank">
            <Image
              src="/Drew_University_logo.svg"
              _hover={{}}
              _focus={{}}

              href="https://www.drew.edu/library/2019/08/19/drew-publications/"
            />
          </a>
        </Box>

        <Center>
          <Text
            color="drewBlue.800"
            fontSize={{ base: "md", sm: "xl" }}
            fontWeight="light"
            textTransform="uppercase"
          >
            Review
          </Text>
        </Center>
      </VStack>
    </Box>
  );
};
