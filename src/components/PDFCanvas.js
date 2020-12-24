import {HStack} from "@chakra-ui/layout";
import {Box, Button} from "@chakra-ui/react";
import {Document, Page} from "react-pdf";
import {useLayoutEffect, useState} from "react";
import {PageButton} from "./PageButton";


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.outerWidth, window.outerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


export const PDFCanvas = ({filename}) => {
    const [width, height] = useWindowSize();
    const [pageNum, setPage] = useState(3);


    return (
        <HStack spacing="24px" justifyContent={'center'}>
            <PageButton isLeft={true} setPage={setPage} pageNum={pageNum}/>
            <Box py="36px">
                <Document file={filename}>
                    <Page pageNumber={pageNum} width={width / 2} height={height / 2}>
                    </Page>
                </Document>
            </Box>
            <PageButton isLeft={false} setPage={setPage} pageNum={pageNum}/>
        </HStack>
    );
}