import {
  Box,
  chakra,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const SubmitPaper = () => {
  return (
    <>
      <VStack
        border="5px solid"
        borderColor="black"
        mx="7vw"
        p="1rem"
        bg="white"
        mt="5%"
      >
        <Box
          mx="auto"
          bg="drewBlue.600"
          px={{ base: "4vw", xl: "10vw" }}
          py="5vh"
          color="white"
        >
          <chakra.h2
            fontSize={{ base: "2xl", sm: "3xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            textAlign="center"
          >
            <chakra.span display="block">
              Did you write a final research paper this semester that you would
              like to publish?
            </chakra.span>
            <chakra.span display="block">
              Submit it to The Drew Review now!
            </chakra.span>
          </chakra.h2>
          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            my={6}
            textAlign="center"
          >
            The Drew Review is Drew’s own peer-reviewed undergraduate research
            journal. <br /> Our mission is to showcase the intellectual vibrancy
            of the students of the CLA.
          </chakra.p>

          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box>
              <chakra.h2
                mb={3}
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "center", sm: "left" }}
                lineHeight="shorter"
              >
                Guidelines for Submission
              </chakra.h2>
              <chakra.p
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", sm: "left" }}
              >
                Students may be asked to make revisions. <br /> The author’s
                name and any other identifying information should be removed.
              </chakra.p>
            </Box>
            <VStack
              direction="column"
              flexGrow={1}
              spacing={5}
              alignItems="center"
              fontSize={{ base: "3xl", md: "2xl" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Any Language
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Any Discipline
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Word Document
                </ListItem>
              </List>
            </VStack>
          </SimpleGrid>

          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            my={12}
            textAlign="center"
          >
            In addition, submissions to The Drew Review require a faculty
            nomination. Students who believe their work is exceptional should
            approach their professor to nominate them.
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
            href="mailto:hwells@drew.edu"
          >
            Apply Now
          </chakra.a>
        </Box>
      </VStack>
      <Box h="2rem" />
    </>
  );
};

export default SubmitPaper;
