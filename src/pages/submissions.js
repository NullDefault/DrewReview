import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/TopNavBar";
import { BackgroundContainer } from "../components/BackgroundContainer";
import { Footer } from "../components/Footer";
import { EmailIcon } from "@chakra-ui/icons";
import { BgImage } from "../components/bgImage";

const Submissions = () => {
  return (
    <Box>
      <NavBar />
      <BgImage />
      <VStack>
        <BackgroundContainer>
          <Text
            textAlign="center"
            m="36px"
            p="10%"
            rounded="md"
            bgColor="blue.700"
          >
            <h1>
              Did you write a final research paper this semester that you would
              like to publish? Submit it to The Drew Review now!
            </h1>
            <p>
              The Drew Review is Drew’s own peer-reviewed undergraduate research
              journal. Our mission is to showcase the intellectual vibrancy of
              the students of the CLA.
            </p>
            <Text my="24px">
              Guidelines for submission:
              <ul>
                <li>Any language</li>
                <li>Any discipline</li>
                <li>
                  Word document (with the author’s name and any other
                  identifying information removed)
                </li>
                <li>Students may be asked to make revisions</li>
              </ul>
            </Text>
            <Text>
              In addition, submissions to The Drew Review require a faculty
              nomination. Students who believe their work is exceptional should
              approach their professor to nominate them.
            </Text>
            <Text mt="24px">
              Send submissions and nominations to the{" "}
              <Link href="mailto:drewreview@drew.edu">
                Drew Review board
                <EmailIcon mx="8px" />
              </Link>
            </Text>
          </Text>
        </BackgroundContainer>
        <Footer />
      </VStack>
    </Box>
  );
};

export default Submissions;
