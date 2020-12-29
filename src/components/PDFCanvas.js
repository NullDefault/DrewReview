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

    const pageDecrement = (pageNum <= 0 ) ? <div/> : <NumberDecrementStepper/>
    const pageIncrement = (pageNum >= totalPages ) ? <div/> : <NumberIncrementStepper/>

    const pageNumberInput = <NumberInput value={pageNum}
                                     allowMouseWheel={true}
                                     onChange={(value)=>{
                                         value = parseInt(value);
                                         if(value !== 0 && value <= totalPages){
                                             setPage(value);
                                         }
                                     }}>
        <NumberInputField/>
        <NumberInputStepper>
            {pageIncrement} {pageDecrement}
        </NumberInputStepper>
    </NumberInput>

    return (
        <VStack>
            <HStack spacing="24px" justifyContent={'center'}>
                <PageButton isLeft={true} setPage={setPage} pageNum={pageNum} totalPages={totalPages}/>
                <Box pt="36px">
                    <Document file={filename} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNum} width={width / 2} height={height / 2} wrap={true}>
                        </Page>
                    </Document>
                </Box>
                <PageButton isLeft={false} setPage={setPage} pageNum={pageNum} totalPages={totalPages}/>
            </HStack>
            <Box w={width / 2} h="100%" pb="36px">
                <Progress value={progress}/>
            </Box>
            <HStack>
                {pageNumberInput}
            </HStack>
        </VStack>
    );
}