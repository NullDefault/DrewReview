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
      width={{ base: "90vw", md: "60vw", lg: "70vw", xl: "80vw" }}
      height="100vh"
    >
      <object
        data={filename}
        type="application/pdf"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      ></object>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Box p="12px" color="bodyText">
          If your web browser doesn't have a PDF plugin you can instead{" "}
          <Link color="blue.500" href={filename}>
            click here to view the PDF file.
          </Link>
        </Box>
      ) : (
        <></>
      )}
      <VStack>{pdfView}</VStack>
      <Text
        py={24}
        px={{ base: 18, md: 48 }}
        fontSize={{ base: "xl", md: "2xl" }}
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
          fontWeight="semibold"
        >
          Drew Review
        </Text>{" "}
        is the annual research journal for the undergraduates of the Drew
        University College of Liberal Arts, publishing undergraduate research
        from the previous calendar year. Our mission is to showcase the
        intellectual vibrancy of the students of the College of Liberal Arts.
      </Text>
    </>
  );
};

export default Index;
