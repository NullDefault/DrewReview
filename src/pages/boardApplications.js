import {
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsFileRichtext } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const BoardApplications = () => {
  return (
    <>
      <VStack minH="100vh" alignItems="center" justify="center">
        <Flex
          direction={{ base: "column", lg: "row" }}
          px={{ base: 12, lg: 24 }}
          pb={24}
          mt={{ base: 12, xl: 32 }}
          mx="auto"
        >
          <Box
            w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
            mx="auto"
            pr={{ md: 20 }}
          >
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              lineHeight="shorter"
              color="white"
              mb={6}
            >
              <chakra.span display="block">
                Do you want to serve on the editorial board of The Drew Review?
              </chakra.span>
              <chakra.span display="block" color="pink.300">
                Send an application to be an editor!
              </chakra.span>
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "xl", md: "2xl" }}
              color={useColorModeValue("gray.100", "gray.300")}
            >
              To apply, please submit the following:
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={BsFileRichtext} color="pink.400" />A writing
                  sample incorporating at least 2 scholarly sources and minimum
                  5 pages in length,
                </ListItem>
                <ListItem>
                  <ListIcon as={GiLetterBomb} color="pink.400" />A cover letter
                  explaining why you would like to serve on the editorial board
                  of The Drew Review,
                </ListItem>
                <ListItem>
                  <ListIcon as={FaChalkboardTeacher} color="pink.400" />
                  And a nomination from a professor.
                </ListItem>
                <ListItem py={3} fontSize={{ base: "lg", md: "xl" }}>
                  Send application materials to Professor Hannah Wells.
                </ListItem>
              </List>
            </chakra.p>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mb={{ base: 4, md: 8 }}
              spacing={2}
            >
              <Box display="inline-flex" rounded="md" shadow="md">
                <chakra.a
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  fontWeight="bold"
                  w="full"
                  rounded="md"
                  color="white"
                  bg="gray.700"
                  border="2px"
                  borderColor="gray.600"
                  _hover={{
                    bg: "gray.800",
                  }}
                  href="mailto:hwells@drew.edu"
                >
                  Apply Now
                  <Icon ml="2" as={BiMailSend} />
                </chakra.a>
              </Box>
            </Stack>
          </Box>
          <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
            <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src="/placeholderHero.jpg"
              alt="Drew University Pretty Photo"
            />
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default BoardApplications;
