import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { useYear } from "../lib/year";
import { MobileView } from "react-device-detect";
import React from "react";

const Index = () => {
  // The naming pattern for the pdf files is DrewReview_V{n}.pdf
  // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
  // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
  const yearContext = useYear();
  const filename = `/DrewReview_V${yearContext.year - 2007}.pdf`;

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
      >
      </object>
    </Box>
  );

  return (
    <>
      <VStack justify="start">
          <MobileView>
              <Text py="12px">
                  If your web browser doesn't have a PDF plugin. Instead you can{" "}
                  <Link color="blue.500" href={filename}>click here to view the PDF file.</Link>
              </Text>
          </MobileView>
        {pdfView}
      </VStack>
    </>
  );
};

export default Index;
