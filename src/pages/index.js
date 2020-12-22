import {Link as ChakraLink, Select, Icon, Box, Button} from '@chakra-ui/react';
import {useLayoutEffect, useState} from "react";
import {HStack} from "@chakra-ui/layout";
import {Document, Page} from "react-pdf";
import {ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, TriangleDownIcon} from '@chakra-ui/icons';
import {Container} from '../components/Container';
import {DarkModeSwitch} from '../components/DarkModeSwitch';
import {Logo} from '../components/Logo';
import {Footer} from '../components/Footer';
import {useAuth} from "../lib/auth";
import {SideNav} from "../components/SideNav";


const Index = () => {
    const auth = useAuth();
    const [chosenYear, setYear] = useState(2020);
    const [width, height] = useWindowSize();
    const [pageNum, setPage] = useState(3);


    // The naming pattern for the pdf files is DrewReview_V{n}.pdf
    // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
    // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
    const filename = `/DrewReview_V${chosenYear - 2007}.pdf`;


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

    const onRightClick = () => {
        setPage(pageNum + 1);
    }
    const onLeftClick = () => {
        setPage(pageNum - 1);
    }


    return (
        <Container className="background">
            <DarkModeSwitch/>
            <Logo/>
            <SideNav children={!auth?.user ? // if user is already logged in, show sign in button...
                <Button spacing={3} onClick={() => auth.signInWithGithub()}> Sign In </Button> :
                <Button spacing={3} onClick={() => auth.signOut()}> Sign Out</Button> // otherwise the sign out button
            }/>

            <HStack spacing="24px" bg="blue.800" justifyContent={'center'} pt={20}>
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

            <Footer>
                <Box>
                    <ChakraLink
                        isExternal
                        href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                        flexGrow={2}
                        mr={2}
                    >
                        Current website <Icon as={ExternalLinkIcon} mx="2px"/>
                    </ChakraLink>
                </Box>
                <Select placeholder="Select year"
                        icon={<TriangleDownIcon/>}
                        variant="filled"
                        value={chosenYear}
                        mx={8}
                        onChange={(e) => {
                            setYear(e.target.value);
                        }}>
                    <option value={2008}>2008</option>
                    <option value={2009}>2009</option>
                    <option value={2010}>2010</option>
                    <option value={2011}>2011</option>
                    <option value={2012}>2012</option>
                    <option value={2013}>2013</option>
                    <option value={2014}>2014</option>
                    <option value={2015}>2015</option>
                    <option value={2016}>2016</option>
                    <option value={2017}>2017</option>
                    <option value={2018}>2018</option>
                    <option value={2019}>2019</option>
                    <option value={2020}>2020</option>
                </Select>
                <Box>
                    <ChakraLink
                        isExternal
                        href="https://www.drew.edu"
                        flexGrow={2}
                        mr={2}>
                        Drew University <Icon as={ExternalLinkIcon} mx="2px"/>
                    </ChakraLink>
                </Box>
            </Footer>
        </Container>
    )
}

export default Index;