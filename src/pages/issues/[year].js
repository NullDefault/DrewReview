import {useRouter} from 'next/router';
import {Document, Page} from 'react-pdf';
import {Container} from "../../components/Container";
import {useState} from "react";
import {Button, Center} from "@chakra-ui/react"
import {Box} from "@chakra-ui/layout";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

const Issue = () => {
    const router = useRouter()
    const {year} = router.query
    const filename = `/${year}.pdf`

    const [pageNum, setPage] = useState(3)

    const onRightClick = () => {
        setPage(pageNum+1);
    }
    const onLeftClick = () => {
        setPage(pageNum-1);
    }

    return (
        <Center>
            <Button colorScheme="teal" onClick={onLeftClick}>
                <ChevronLeftIcon/>
            </Button>
            <Box>
                <Document file={filename}>
                    <Page pageNumber={pageNum}>
                    </Page>
                </Document>
            </Box>
            <Button colorScheme="teal" onClick={onRightClick}>
                <ChevronRightIcon/>
            </Button>
        </Center>

    )
}

export default Issue