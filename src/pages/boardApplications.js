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
    <>
      <Box
        border="5px solid"
        borderColor="black"
        mx="7vw"
        p="1rem"
        bg="white"
        mt="1rem"
      >
        <VStack
          alignItems="center"
          justify="center"
          bg="drewTeal.600"
          minH="90vh"
        >
          <Flex
            direction={{ base: "column", xl: "row" }}
            mx="auto"
            px={{ base: "4vw", xl: "10vw" }}
            py="5vh"
          >
            <Box
              w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
              mx="auto"
              pr={{ md: 20 }}
              textAlign={{ base: "center", xl: "left" }}
            >
              <chakra.h2
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontWeight="extrabold"
                lineHeight="shorter"
                color="white"
                mb={6}
              >
                <chakra.span display="block">
                  Do you want to serve on the editorial board of The Drew
                  Review?
                </chakra.span>
                <chakra.span display="block">
                  Send an application to be an editor!
                </chakra.span>
              </chakra.h2>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="white"
              >
                To apply, please submit the following:
                <List spacing={3} pt={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />A writing
                    sample incorporating at least 2 scholarly sources and
                    minimum 5 pages in length.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />A cover
                    letter explaining why you would like to serve on the
                    editorial board of The Drew Review.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    And a nomination from a professor.
                  </ListItem>
                </List>
              </chakra.p>
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
              >
                Apply Now
              </chakra.a>
            </Box>
            <Box w="full" mt={{ base: "3rem", xl: "10%" }}>
              <Image
                src="/placeholderHero.jpg"
                alt="Drew University Pretty Photo"
              />
            </Box>
          </Flex>
        </VStack>
      </Box>
      <Box h="2rem" />
    </>
  );
};

export default BoardApplications;
