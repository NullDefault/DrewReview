import { Box, Text, Link, VStack } from "@chakra-ui/react";
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
      width={["90vw", "80vw", "65vw", "70vw", "75vw", "80vw"]}
      height="100vh"
      my="1rem"
    >
      <object
        data={filename}
        type="application/pdf"
        style={{
          display: "block",
          width: "100%",
          height: "100%"
        }}
      ></object>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Box>
          <Text p="12px" color="bodyText">
            If your web browser doesn't have a PDF plugin you can instead{" "}
            <Link color="blue.500" href={filename}>
              click here to view the PDF file.
            </Link>
          </Text>
        </Box>
      ) : (
        <></>
      )}
      <VStack>{pdfView}</VStack>
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
      <Box h={8} />
    </>
  );
};

export default Index;
