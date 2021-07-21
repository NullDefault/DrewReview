import {
  Box,
  VStack,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Text,
  chakra,
} from "@chakra-ui/react";
import React from "react";

const ReviewBlock = ({ title, setValue, value }) => {
  return (
    <Box>
      <RadioGroup
        pt={4}
        onChange={setValue}
        value={value}
        size="lg"
        colorScheme="whiteAlpha"
        color="white"
      >
        <Stack direction={{base: "column", lg: "row"}} justify="space-between" bg="drewTeal.600" p={4}>
          <Text>{title}</Text>
          <Stack direction="row">
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
            <Radio value="5">5</Radio>
          </Stack>
        </Stack>
      </RadioGroup>
      <FormControl>
        <Textarea rows={4} variant="outline" rounded="none" />
        <FormHelperText>Comments</FormHelperText>
      </FormControl>
    </Box>
  );
};

const ReviewForm = () => {
  const [value, setValue] = React.useState("1");
  return (
    <>
      <Box
        border="5px solid"
        borderColor="black"
        mx="7vw"
        p="1rem"
        bg="drewGreen.500"
        mt="1rem"
      >
        <VStack
          alignItems="left"
          justify="center"
          bg="white"
          minH="90vh"
          px={{ base: "4vw", xl: "10vw" }}
          py="5vh"
          fontWeight="extrabold"
        >
          <FormControl id="email">
            <FormLabel
              fontSize={{ base: "2xl", sm: "3xl" }}
              fontWeight="extrabold"
              color="drewGreen.500"
            >
              Paper Title
            </FormLabel>
            <Input variant="outline" type="email" rounded="none" />
          </FormControl>
          <Text color="drewGreen.500" fontSize="3xl" textAlign="center" pt={6}>
            Rating
          </Text>
          <ReviewBlock
            title="The subject matter is innovative, interesting, and creative"
            value={value}
            setValue={setValue}
          />
          <ReviewBlock
            title="Quality of source usage and supporting evidence"
            value={value}
            setValue={setValue}
          />
          <ReviewBlock
            title="Quality of argument and/or research methodology"
            value={value}
            setValue={setValue}
          />
          <ReviewBlock
            title="Accuracy of Content"
            value={value}
            setValue={setValue}
          />
          <ReviewBlock
            title="Language is clear and paper is well structured"
            value={value}
            setValue={setValue}
          />
          <ReviewBlock
            title="Overall conclusions are data/support driven"
            value={value}
            setValue={setValue}
          />
          <Box>
            <Text
              color="drewGreen.500"
              fontSize="3xl"
              textAlign="center"
              pt={6}
            >
              Overall Recommendation
            </Text>
            <RadioGroup
              pt={4}
              onChange={setValue}
              value={value}
              size="lg"
              colorScheme="whiteAlpha"
              color="white"
            >
              <Stack
                direction="row"
                justify="space-between"
                bg="bodyText"
                p={4}
              >
                <Stack direction="column">
                  <Radio value="1">Accept with no revisions</Radio>
                  <Radio value="2">Accept with minimal revisions</Radio>
                  <Radio value="3">Accept with major revisions</Radio>
                  <Radio value="4">Reject</Radio>
                </Stack>
              </Stack>
            </RadioGroup>
          </Box>
          <Text color="drewGreen.500" fontSize="3xl" textAlign="center" pt={6}>
            Comments to Author
          </Text>
          <Text
            fontWeight="semibold"
            color="bodyText"
            fontSize="xl"
            textAlign="center"
          >
            If you have any specific comments to offer the author please suggest
            them here. Please specify page and paragraph number for any specific
            changes.
          </Text>
          <FormControl pt={6}>
            <Text color="white" bg="drewTeal.500" p={2}>
              Comments on Language, Style, and Structure
            </Text>
            <Textarea rows={6} variant="outline" rounded="none" />
          </FormControl>
          <FormControl pt={6}>
            <Text color="white" bg="drewTeal.500" p={2}>
              Comments on Argument, Content, and Overall Conclusions
            </Text>
            <Textarea rows={6} variant="outline" rounded="none" />
          </FormControl>
          <FormControl py={6}>
            <Text color="white" bg="drewTeal.500" p={2}>
              Overall Comments
            </Text>
            <Textarea rows={6} variant="outline" rounded="none" />
          </FormControl>
          <chakra.a
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            mt={6}
            fontWeight="extrabold"
            w="full"
            color="drewGreen.500"
            bg="white"
            border="5px solid"
            borderColor="drewGreen.500"
            _hover={{
              bg: "drewGreen.500",
              color: "white",
            }}
            style={{
              textTransform: "uppercase",
              transition:
                "background .25s,border .25s,box-shadow .25s,color .25s,transform .25s,-webkit-transform .25s",
            }}
            href="mailto:hwells@drew.edu"
          >
            Submit Review
          </chakra.a>
        </VStack>
      </Box>
      <Box h={8} />
    </>
  );
};

export default ReviewForm;
