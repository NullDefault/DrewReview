import { Box, chakra, SimpleGrid, VStack, Link } from "@chakra-ui/react";
import React from "react";

const SubmitPaper = () => {
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
            color="bodyText"
            textAlign="center"
          >
            <chakra.span display="block">
              Did you write a final research paper this semester that you would
              like to publish?
            </chakra.span>
            <chakra.span display="block" color="drewBlue.800">
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
            p={8}
          >
            <Box>
              <chakra.h2
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "center", sm: "left" }}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Guidelines for Submission
              </chakra.h2>
              <chakra.p
                mb={6}
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
            >
              <chakra.ul>
                <chakra.li fontSize={{ base: "3xl", md: "4xl" }}>
                  Any Language
                </chakra.li>
                <chakra.li fontSize={{ base: "3xl", md: "4xl" }}>
                  Any Discipline
                </chakra.li>
                <chakra.li fontSize={{ base: "3xl", md: "4xl" }}>
                  Word Document
                </chakra.li>
              </chakra.ul>
            </VStack>
          </SimpleGrid>

          <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
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

export default SubmitPaper;
