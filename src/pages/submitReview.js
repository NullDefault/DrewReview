import { Box, chakra, Icon, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightCircleLine } from "react-icons/ri";
import React from "react";

const SubmitReview = () => {
  return (
    <>
      <VStack
        justify="center"
        border="5px solid"
        borderColor="black"
        mx="7vw"
        p="1rem"
        bg="white"
        mt="1rem"
      >
        <Box mx="auto" bg="drewBlue.600" px="10vw" py="5vh">
          <chakra.h2
            fontSize={{ base: "xl", sm: "2xl" }}
            color="white"
            textAlign="center"
          >
            <chakra.span
              display="block"
              textAlign="left"
              fontWeight="extrabold"
              pb={6}
            >
              Dear Faculty Reviewer,
            </chakra.span>
            <chakra.span display="block">
              The Editorial Board thanks you for reviewing the provided article.
              The review is part of a double-blind review process in which the
              identity of the authors and the reviewers are masked. We ask that
              you make all comments on this form, and not on the manuscript
              itself.
            </chakra.span>
            <chakra.span display="block" py={6}>
              The Drew Review is targeting high quality, creative research
              papers approximately ten pages or more in length. The papers
              should be ‘A’ quality and have original and interesting theses.
              Furthermore, if you would like an example of past published papers
              we can send you an example for reference, or you can read past
              issues{" "}
              <chakra.span color="drewBlue.200">
                <Link href="/"><u>here</u></Link>
              </chakra.span>
              . In reviewing the paper, please assess the quality of the writing
              and content for possible publication.
            </chakra.span>
            <chakra.span display="block" py={6}>
              The form will prompt you to rank the paper on specific qualities
              we find important for published work, as well as request your
              official recommendation about the work and any specific comments
              you would like to offer the author.
            </chakra.span>
            <chakra.span
              display="block"
              py={6}
              fontSize={{ base: "xl", sm: "2xl" }}
            >
              In addition, if you are aware of any students doing research or
              independent study, we would love to see paper submissions from
              them in the future. Thank you so much for reviewing the paper for
              us. If you have any questions feel free to contact{" "}
              <chakra.span color="drewBlue.200">
                <Link href="mailto:drewreview@drew.edu">
                  <u>drewreview@drew.edu</u>
                </Link>
              </chakra.span>
              .
            </chakra.span>
          </chakra.h2>
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
            Proceed to Form
            <Icon ml="2" as={RiArrowRightCircleLine} />
          </chakra.a>
        </Box>
      </VStack>
      <Box h="2rem"/>
    </>
  );
};

export default SubmitReview;
