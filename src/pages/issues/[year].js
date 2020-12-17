import {useRouter} from 'next/router';
import {Document, Page} from 'react-pdf';
import {Container} from "../../components/Container";
import {useState} from "react";

const Issue = () => {
    const router = useRouter()
    const {year} = router.query
    const filename = `/${year}.pdf`

    const [pageNum, setPage] = useState(3)
    console.log(pageNum)
    return (
        <Container>
            <Document file={filename} renderMode={"canvas"}>
                <Page pageNumber={pageNum}>
                </Page>
            </Document>
        </Container>
    )
}

export default Issue