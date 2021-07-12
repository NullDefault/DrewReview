import { VStack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <VStack minH="100vh" justify="center">
        <Text
          mb={6}
          py={24}
          px={{base: 8, md: 12}}
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="1"
          letterSpacing={{ base: "normal", md: "tight" }}
          color="white"
          textAlign="center"
        >
          The{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            color="blue.600"
            fontWeight="extrabold"
          >
            Drew Review
          </Text>{" "}
          is the annual research journal for the undergraduates of the Drew
          University College of Liberal Arts, publishing undergraduate research
          from the previous calendar year. Our mission is to showcase the
          intellectual vibrancy of the students of the College of Liberal Arts.
        </Text>
      </VStack>
    </>
  );
};

export default About;
