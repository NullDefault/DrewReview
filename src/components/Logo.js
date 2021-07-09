import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Box {...props}>
      <VStack>
        <a href="https://www.drew.edu/1/" target="_blank">
          <Image
            src="/drew-logo.png"
            _focus={{}}
            _active={{}}
            _highlighted={{}}
            _active={{}}

            href="https://www.drew.edu/library/2019/08/19/drew-publications/"
          />
        </a>
        <Center>
          <Text
            color="white"
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
