import {HStack, VStack} from "@chakra-ui/layout";
import {Box, Text} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useState} from "react";
import {PageButton} from "./PageButton";
import {useWindowSize} from "../lib/windowSize";


export const PDFCanvas = ({filename}) => {
    const [width, height] = useWindowSize();
    const [pageNum, setPage] = useState(3);


    return (
        <VStack>
            <HStack spacing="24px" justifyContent={'center'}>
                <PageButton isLeft={true} setPage={setPage} pageNum={pageNum}/>
                <Box py="36px">
                    <Document file={filename}>
                        <Page pageNumber={pageNum} width={width / 2} height={height / 2} wrap={true}>
                        </Page>
                    </Document>
                </Box>
                <PageButton isLeft={false} setPage={setPage} pageNum={pageNum}/>
            </HStack>
            <Text>
                {pageNum}
            </Text>
        </VStack>
    );
}