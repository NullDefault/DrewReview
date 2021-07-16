import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Box {...props}>
      <VStack>
        <Box
          _focus={{}}
          _active={{}}
          _highlighted={{}}
          minH="43px"
          minW="179px"
        >
          <a href="https://www.drew.edu/1/" target="_blank">
            <Image
              src="/Drew_University_logo.svg"
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
