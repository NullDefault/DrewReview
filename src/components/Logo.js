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
              src="/logo-print.png"
              href="https://www.drew.edu/library/2019/08/19/drew-publications/"
              style={{
                filter: "invert(1)",
              }}
            />
          </a>
        </Box>

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
