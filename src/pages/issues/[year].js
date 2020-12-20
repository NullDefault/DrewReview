import {useRouter} from 'next/router';
import { Document, Page} from 'react-pdf';
import {useState} from "react";
import {Button, Center} from "@chakra-ui/react"
import {Box, HStack} from "@chakra-ui/layout";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const Issue = () => {
    const router = useRouter()
    const {year} = router.query

    // The naming pattern for the pdf files is DrewReview_V{n}.pdf
    // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
    // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
    const filename = `/DrewReview_V${year - 2007}.pdf`

    const [pageNum, setPage] = useState(3)

    const onRightClick = () => {
        setPage(pageNum + 1);
    }
    const onLeftClick = () => {
        setPage(pageNum - 1);
    }

    return (
        <Center>
            <HStack spacing="24px" bg="blue.800">
                <Button colorScheme="green" onClick={onLeftClick} ml="24px">
                    <ChevronLeftIcon/>
                </Button>
                <Box py="36px">
                    <Document file={filename}>
                        <Page pageNumber={pageNum} size="A4">
                        </Page>
                    </Document>
                </Box>
                <Button colorScheme="green" onClick={onRightClick} mr="24px">
                    <ChevronRightIcon/>
                </Button>
            </HStack>
        </Center>
    )
}

export default Issue