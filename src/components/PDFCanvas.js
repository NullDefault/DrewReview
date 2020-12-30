import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
    Box,
    HStack,
    VStack,
    Text,
    Progress,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useState, useLayoutEffect} from "react";
import {PageButton} from "./PageButton";
import {useWindowSize} from "../lib/windowSize";
import {BackgroundContainer} from "./BackgroundContainer";

export const PDFCanvas = ({filename}) => {
    const windowSize = useWindowSize();
    const [pdfPageDimensions, updatePdfPageDimensions] = useState({width: 0, height: 0})

    const [pageNumber, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const progress = pageNumber / (totalPages / 100);


    const resizeCanvas = () => {
        updatePdfPageDimensions({width: pdfPageDimensions.width, height: windowSize.height * .65});
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const onDocumentLoadSuccess = ({numPages}) => {
        setTotalPages(numPages);
    };

    const handleRenderSuccess = (pageData) => {
        resizeCanvas();
        const pgWidth = pageData.width;
        updatePdfPageDimensions({width: pgWidth, height: pdfPageDimensions.height})
    }

    const pageDecrement = (pageNumber <= 1) ? <div/> : <NumberDecrementStepper/>
    const pageIncrement = (pageNumber >= totalPages) ? <div/> : <NumberIncrementStepper/>

    const setNewPage = (value) => {
        value = parseInt(value);
        setPage(value);
    }

    const turnLeftPage = () => {
        if (pageNumber - 1 !== 0) {
            setPage(pageNumber - 1);
        }
    }

    const turnRightPage = () => {
        if (pageNumber + 1 <= totalPages) {
            setPage(pageNumber + 1);
        }
    }
    const pageNumberInput = <HStack>
        <NumberInput value={pageNumber} allowMouseWheel={true}
                     onChange={setNewPage} min={1} max={totalPages}>
                <NumberInputField/>
                <NumberInputStepper>
                    {pageIncrement} {pageDecrement}
                </NumberInputStepper>
        </NumberInput>
        <Text>
            / {totalPages}
        </Text>
    </HStack>


    let loadingBg = <BackgroundContainer width={pdfPageDimensions.width} height={pdfPageDimensions.height} wrap={true}/>

    return (
        <VStack>
            <HStack spacing="24px" justifyContent={'center'}>
                <PageButton isLeft={true} setPage={turnLeftPage}/>
                <Box pt="36px">
                    <Document file={filename} onLoadSuccess={onDocumentLoadSuccess} loading={loadingBg}
                              onSourceSuccess={() => {
                                  setPage(1)
                              }}>
                        <Page
                            pageNumber={pageNumber}
                            height={pdfPageDimensions.height}
                            loading={loadingBg}
                            onRenderSuccess={handleRenderSuccess}
                            wrap={true}/>
                    </Document>
                </Box>
                <PageButton isLeft={false} setPage={turnRightPage}/>
            </HStack>
            <Box w={pdfPageDimensions.width} h="100%" pb="36px">
                <Progress value={progress}/>
            </Box>
            <HStack>
                {pageNumberInput}
            </HStack>
        </VStack>
    );
}