import {
  Box,
  chakra,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const BoardApplications = () => {
  return (
    <Box
      border="5px solid"
      borderColor="black"
      mx="7vw"
      p="1rem"
      bg="white"
      mt="1rem"
    >
      <VStack alignItems="center" justify="center" bg="#1379B0" minH="90vh">
        <Flex
          direction={{ base: "column", lg: "row" }}
          mx="auto"
          px="10vw"
          py="5vh"
        >
          <Box
            w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
            mx="auto"
            pr={{ md: 20 }}
          >
            <chakra.h2
              fontSize={{ base: "2xl", sm: "3xl" }}
              fontWeight="extrabold"
              lineHeight="shorter"
              color="white"
              mb={6}
            >
              <chakra.span display="block">
                Do you want to serve on the editorial board of The Drew Review?
              </chakra.span>
              <chakra.span display="block">
                Send an application to be an editor!
              </chakra.span>
            </chakra.h2>
            <chakra.p mb={6} fontSize={{ base: "lg", md: "xl" }} color="white">
              To apply, please submit the following:
              <List spacing={3} pt={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />A writing
                  sample incorporating at least 2 scholarly sources and minimum
                  5 pages in length.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />A cover
                  letter explaining why you would like to serve on the editorial
                  board of The Drew Review.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  And a nomination from a professor.
                </ListItem>
              </List>
            </chakra.p>
            <Stack direction={{ base: "column", sm: "row" }} spacing={2}>
              <chakra.a
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                fontWeight="extrabold"
                w="full"
                color="white"
                bg="transparent"
                border="5px solid"
                borderColor="white"
                _hover={{
                  bg: "white",
                  color: "black",
                }}
                style={{
                  textTransform: "uppercase",
                  transition:
                    "background .25s,border .25s,box-shadow .25s,color .25s,transform .25s,-webkit-transform .25s",
                }}
                href="mailto:hwells@drew.edu"
              >
                Apply Now
              </chakra.a>
            </Stack>
          </Box>
          <Box w={{ base: "full", md: 10 / 12 }} my="auto">
            <Image
              w="full"
              src="/placeholderHero.jpg"
              alt="Drew University Pretty Photo"
            />
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default BoardApplications;
