import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {HStack, VStack} from "@chakra-ui/layout";
import {
    Box,
    Progress,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper
} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useState} from "react";
import {PageButton} from "./PageButton";
import {useWindowSize} from "../lib/windowSize";
import {BackgroundContainer} from "./BackgroundContainer";

export const PDFCanvas = ({filename}) => {
    const [width, height] = useWindowSize();
    const [pageDimensions, updatePageDimensions] = useState({width: 0, height: 0})
    const [pageNum, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const progress = pageNum / (totalPages / 100);

    const onDocumentLoadSuccess = ({numPages}) => {
        setTotalPages(numPages);
        resizeCanvas();
    };

    const pageDecrement = (pageNum <= 0) ? <div/> : <NumberDecrementStepper/>
    const pageIncrement = (pageNum >= totalPages) ? <div/> : <NumberIncrementStepper/>

    const resizeCanvas = () => {
        updatePageDimensions({width: width * .75, height: height * .75});
    }

    const setNewPage = (value) => {
        value = parseInt(value);
        if (Math.abs(value - pageNum) === 1) {
            if (value < pageNum) {
                turnLeftPage();
            } else {
                turnRightPage();
            }
        } else {
            setPage(value);
            resizeCanvas();
        }
    }

    const turnLeftPage = () => {
        if (pageNum - 1 !== 0) {
            setPage(pageNum - 1);
        }
        resizeCanvas();
    }

    const turnRightPage = () => {
        if (pageNum + 1 <= totalPages) {
            setPage(pageNum + 1);
        }
        resizeCanvas();
    }

    const pageNumberInput = <NumberInput value={pageNum} allowMouseWheel={true} onChange={setNewPage}>
        <NumberInputField/>
        <NumberInputStepper>
            {pageIncrement} {pageDecrement}
        </NumberInputStepper>
    </NumberInput>

    let loadingBg = <BackgroundContainer width={pageDimensions.width} height={pageDimensions.height} wrap={true}/>

    const pageRender = <Page
        pageNumber={pageNum}
        height={pageDimensions.height}
        loading={loadingBg}
        wrap={true}/>


    return (
        <VStack>
            <HStack spacing="24px" justifyContent={'center'}>
                <PageButton isLeft={true} setPage={turnLeftPage}/>
                <Box pt="36px">
                    <Document file={filename} onLoadSuccess={onDocumentLoadSuccess} loading={loadingBg}
                              onSourceSuccess={() => {
                                  setPage(2)
                              }}>
                        {pageRender}
                    </Document>
                </Box>
                <PageButton isLeft={false} setPage={turnRightPage}/>
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