import {
  Box,
  Button,
  Divider,
  Icon,
  Link as ChakraLink,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ExternalLinkIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BackgroundContainer } from "../components/BackgroundContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/TopNavBar/index";
import { SideNav } from "../components/SideNav";
import { useAuth } from "../lib/auth";
import { VStack } from "@chakra-ui/layout";
import { useWindowSize } from "../lib/windowSize";
import { isMobile } from "react-device-detect";
import { BgImage } from "../components/bgImage";

const Index = () => {
  const [chosenYear, setYear] = useState(2020);
  const windowSize = useWindowSize();
  // The naming pattern for the pdf files is DrewReview_V{n}.pdf
  // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
  // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
  const filename = `/DrewReview_V${chosenYear - 2007}.pdf`;

  const yearSelect = (
    <Box bgColor="blue.500" style={{ borderRadius: "0.375rem" }}>
      <Select
        placeholder="Select year"
        icon={<TriangleDownIcon />}
        variant="filled"
        color="white"
        bg="blue.800"
        borderColor="gray.700"
        focusBorderColor="gray.600"
        size="lg"
        my="12px"
        value={chosenYear}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <option value={2008}>2008</option>
        <option value={2009}>2009</option>
        <option value={2010}>2010</option>
        <option value={2011}>2011</option>
        <option value={2012}>2012</option>
        <option value={2013}>2013</option>
        <option value={2014}>2014</option>
        <option value={2015}>2015</option>
        <option value={2016}>2016</option>
        <option value={2017}>2017</option>
        <option value={2018}>2018</option>
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
      </Select>
    </Box>
  );

  const pdfView = isMobile ? ( // if mobile render a link to the pdf
    <Box h="400px">
      <VStack>
        <Box mt="100px">
          <ChakraLink href={filename} flexGrow={2}>
            View Drew Review for {chosenYear}
            <Icon as={ExternalLinkIcon} mx="12px" />
          </ChakraLink>
        </Box>
      </VStack>
    </Box> // otherwise render full pdf viewer
  ) : (
    <iframe
      style={{
        width: windowSize.width * 0.9,
        height: windowSize.height * 0.92,
      }}
      src={filename}
    />
  );

  return (
    <Box>
      <NavBar />
      <BgImage />
      <BackgroundContainer>
        <VStack justifyContent={"center"} spacing="12px">
          <Box pt="24px">{yearSelect}</Box>
          <Box>{pdfView}</Box>
          <Box
            w={isMobile ? "90%" : "60%"}
            textAlign="center"
            bg="blue.800"
            style={{ borderRadius: "0.375rem" }}
            p="24px"
          >
            The Drew Review is the annual research journal for the
            undergraduates of the Drew University College of Liberal Arts,
            publishing undergraduate research from the previous calendar year.
            <div />
            Our mission is to showcase the intellectual vibrancy of the students
            of the CLA.
            <Divider mt="8px" />
          </Box>
        </VStack>
        <Footer />
      </BackgroundContainer>
    </Box>
  );
};

export default Index;
