import { Box, Text, Link } from "@chakra-ui/react";
import { useYear } from "../lib/year";
import { isMobile } from "react-device-detect";
import React from "react";

const Index = () => {
  // The naming pattern for the pdf files is DrewReview_V{n}.pdf
  // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
  // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
  const yearContext = useYear();
  const filename = `/archives/DrewReview_V${yearContext.year - 2007}.pdf`;

  const pdfView = (
    <Box
      width={["80vw", "80vw", "65vw", "70vw", "75vw", "80vw"]}
      my="1rem"
      h={["75vh", "97vh"]}
      mx="auto"
    >
      <object
        data={filename}
        type="application/pdf"
        style={{
          width: "100%",
          height: isMobile ? (window).height : "95%",
        }}
      />
    </Box>
  );

  const mobileLink = isMobile ? (
    <Box>
      <Text p="12px" color="white">
        If your web browser doesn't have a PDF plugin you can instead{" "}
        <Link color="blue.300" href={filename}>
          click here to view the PDF file.
        </Link>
      </Text>
    </Box>
  ) : (
    <></>
  );

  return (
    <Box>
      <Box h="100%">
        <Box h="100%" textAlign="center">
          {mobileLink}
        </Box>
        <Box>{pdfView}</Box>
      </Box>

      <Box bg="white" border="5px solid" borderColor="black" mx="10vw">
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="menuGray"
          textAlign="center"
          m="15px"
          p="40px"
          bg="drewGreen.500"
        >
          The{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            color="white"
            fontWeight="extrabold"
          >
            Drew Review
          </Text>{" "}
          is the annual research journal for the undergraduates of the Drew
          University College of Liberal Arts, publishing undergraduate research
          from the previous calendar year. Our mission is to showcase the
          intellectual vibrancy of the students of the College of Liberal Arts.
        </Text>
      </Box>
      <Box h="2rem"/>
    </Box>
  );
};

export default Index;
