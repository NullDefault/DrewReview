import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {HStack, VStack} from "@chakra-ui/layout";
import {Box, Progress, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useState} from "react";
import {PageButton} from "./PageButton";
import {useWindowSize} from "../lib/windowSize";

export const PDFCanvas = ({filename}) => {
    const [width, height] = useWindowSize();
    const [pageNum, setPage] = useState(2);
    const [totalPages, setTotalPages] = useState(0);
    const progress = pageNum / (totalPages / 100);

    const onDocumentLoadSuccess = ({numPages}) => {
        setTotalPages(numPages);
    };

    const pageDecrement = (pageNum <= 0) ? null : <NumberDecrementStepper/>
    const pageIncrement = (pageNum >= totalPages) ? null : <NumberIncrementStepper/>

    const numberInput = <NumberInput value={pageNum}
                                     allowMouseWheel={true}
                                     onChange={(value)=>{setPage(parseInt(value))}}>
        <NumberInputField/>
        <NumberInputStepper>
            {pageIncrement} {pageDecrement}
        </NumberInputStepper>
    </NumberInput>

    return (
        <VStack>
            <HStack spacing="24px" justifyContent={'center'}>
                <PageButton isLeft={true} setPage={setPage} pageNum={pageNum}/>
                <Box pt="36px">
                    <Document file={filename} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNum} width={width / 2} height={height / 2} wrap={true}>
                        </Page>
                    </Document>
                </Box>
                <PageButton isLeft={false} setPage={setPage} pageNum={pageNum}/>
            </HStack>
            <Box w={width / 2} h="100%" pb="36px">
                <Progress value={progress}/>
            </Box>
            <HStack>
                {numberInput}
            </HStack>
        </VStack>
    );
}