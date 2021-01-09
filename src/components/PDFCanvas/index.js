import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
    Box,
    HStack,
    VStack,
    Center,
    CircularProgress,
    Progress,
} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useState} from "react";
import {PageButton} from "./PageButton";
import {useWindowSize} from "../../lib/windowSize";
import {BackgroundContainer} from "../BackgroundContainer";
import {PageNumberInput} from "./PageNumberInput";

export const PDFCanvas = ({filename}) => {
    const windowSize = useWindowSize();
    const [pageScale, updatePageScale] = useState(1.0);
    const [pageData, updatePageData] = useState({pageNumber: 1, totalPages: 1})
    const progress = pageData.pageNumber / (pageData.totalPages / 100);

    const onDocumentLoadSuccess = ({numPages}) => {
        updatePageData({pageNumber: 1, totalPages: numPages});
    };

// ~~~ Functions related to changing pages ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const setNewPage = (value) => {
        value = parseInt(value);
        updatePageData({pageNumber: value, totalPages: pageData.totalPages});
    }

    const turnLeftPage = () => {
        let leftPage = pageData.pageNumber - 1;
        if (leftPage !== 0) {
            updatePageData({pageNumber: leftPage, totalPages: pageData.totalPages});
        }
    }

    const turnRightPage = () => {
        let rightPage = pageData.pageNumber + 1;
        if (rightPage <= pageData.totalPages) {
            updatePageData({pageNumber: rightPage, totalPages: pageData.totalPages});
        }
    }

    let loadingBg = <BackgroundContainer>
        <Center width={400} height={600}>
            <CircularProgress isIndeterminate color="blue.300" size={100}/>
        </Center>
    </BackgroundContainer>

    const leftButton = windowSize.width > windowSize.height ? <PageButton isLeft={true} setPage={turnLeftPage}/> : <div/>
    const rightButton = windowSize.width > windowSize.height ? <PageButton isLeft={false} setPage={turnRightPage}/> : <div/>

    const onPageLoad = (pageData) => {
        if(pageData.width >= windowSize.width){
            let overflow = windowSize.width / pageData.width;
            updatePageScale(overflow.toFixed(1) - 0.05);
        }
    }

    return (
        <VStack>
            <HStack justifyContent={'center'}>
                {leftButton}
                <Box pt="12">
                    <Document file={filename} onLoadSuccess={onDocumentLoadSuccess} loading={loadingBg}>
                        <Page
                            pageNumber={pageData.pageNumber}
                            onLoadSuccess={onPageLoad}
                            scale={pageScale}
                            loading={loadingBg}
                            wrap={true}/>
                        <Progress value={progress}/>
                    </Document>
                </Box>
                {rightButton}
            </HStack>
            <PageNumberInput pageData={pageData} setNewPage={setNewPage} isMobile={windowSize.width < windowSize.height}/>
        </VStack>
    );
}