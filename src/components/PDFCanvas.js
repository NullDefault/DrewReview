import {HStack} from "@chakra-ui/layout";
import {Box, Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {Document, Page} from "react-pdf";
import {Container} from "./Container";
import {useLayoutEffect, useState} from "react";


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

    const onRightClick = () => {
        setPage(pageNum + 1);
    }
    const onLeftClick = () => {
        setPage(pageNum - 1);
    }

    return (
        <HStack spacing="24px" justifyContent={'center'}>
        <Button colorScheme="green" onClick={onLeftClick} ml="24px">
            <ChevronLeftIcon/>
        </Button>
        <Box py="36px">
            <Document file={filename}>
                <Page pageNumber={pageNum} width={width / 2} height={height / 2}>
                </Page>
            </Document>
        </Box>
        <Button colorScheme="green" onClick={onRightClick} mr="24px">
            <ChevronRightIcon/>
        </Button>
    </HStack>
    );
}