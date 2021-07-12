import { Box, chakra, UnorderedList, ListItem, VStack, Link } from "@chakra-ui/react";
import React from "react";

const CallForPapers = () => {
  return (
    <>
      <VStack minH="100vh" justify="center">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          py={8}
          px={4}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="white"
            textAlign="center"
          >
            <chakra.span display="block">
              Did you write a final research paper this semester that you would
              like to publish?
            </chakra.span>
            <chakra.span display="block" color="gray.400">
              Submit it to The Drew Review now!
            </chakra.span>
          </chakra.h2>
          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            color="white"
            my={6}
            textAlign="center"
          >
            The Drew Review is Drew’s own peer-reviewed undergraduate research
            journal. <br /> Our mission is to showcase the intellectual vibrancy
            of the students of the CLA.
          </chakra.p>
          <chakra.p fontSize={{ base: "xl", md: "2xl" }} color="white">
            Guidelines for submission:
            <UnorderedList mt={6} spacing={3}>
              <ListItem>Any language,</ListItem>
              <ListItem>Any discipline,</ListItem>
              <ListItem>
                Word document (with the author’s name and any other identifying
                information removed),
              </ListItem>
              <ListItem>Students may be asked to make revisions.</ListItem>
            </UnorderedList>
          </chakra.p>
          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.400"
            my={12}
            px={12}
            textAlign="center"
          >
            In addition, submissions to The Drew Review require a faculty
            nomination. Students who believe their work is exceptional should
            approach their professor to nominate them.
          </chakra.p>
          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            color="white"
            my={6}
            textAlign="center"
          >
            Send submissions as an e-mail attachment and nominations to{" "}
            <Link color="blue.500" href="#mailto:drewreview@drew.edu">
              drewreview@drew.edu
            </Link>
          </chakra.p>
        </Box>
      </VStack>
    </>
  );
};

export default CallForPapers;
