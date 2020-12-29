import {Link as ChakraLink, Select, Icon, Box, Button} from '@chakra-ui/react';
import {useState} from "react";
import {ExternalLinkIcon, TriangleDownIcon} from '@chakra-ui/icons';
import {Container} from '../components/Container';
import {Footer} from '../components/Footer';
import {NavBar} from "../components/TopNavBar/index";
import {PDFCanvas} from "../components/PDFCanvas";
import {SideNav} from "../components/SideNav";
import {useAuth} from "../lib/auth";
import {HStack, StackDivider, VStack} from "@chakra-ui/layout";


const Index = () => {
    const [chosenYear, setYear] = useState(2020);

    // The naming pattern for the pdf files is DrewReview_V{n}.pdf
    // There is no issue 0, as the first issue is for the year 2008 and is titled DrewReview_V1.pdf
    // Consequently, to get the right version number, you need to take the query year and subtract 2007 from it
    const filename = `/DrewReview_V${chosenYear - 2007}.pdf`;
    const auth = useAuth();

    const sideNav = <SideNav children={!auth?.user ? // if user is already logged in, show sign in button...
        <Button spacing={3} onClick={() => auth.signInWithGithub()}> Sign In </Button> :
        <Button spacing={3} onClick={() => auth.signOut()}> Sign Out</Button> // otherwise the sign out button
    }/>

    return (
        <Box>
            <NavBar/>
            <Container>
                <PDFCanvas filename={filename}/>
                <Footer>
                    <VStack spacing="24px">
                        <HStack spacing="64px">
                            <Box w="100%">
                                <ChakraLink
                                    isExternal
                                    href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                                    flexGrow={2}
                                >
                                    Current website <Icon as={ExternalLinkIcon} mx="2px"/>
                                </ChakraLink>
                            </Box>
                            <Select placeholder="Select year"
                                    icon={<TriangleDownIcon/>}
                                    variant="filled"
                                    value={chosenYear}
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
                            <Box w="100%">
                                <ChakraLink
                                    isExternal
                                    href="https://www.drew.edu"
                                    flexGrow={2}
                                    >
                                    Drew University <Icon as={ExternalLinkIcon} mx="2px"/>
                                </ChakraLink>
                            </Box>
                        </HStack>
                        <StackDivider/>
                        <HStack>
                            {sideNav}
                        </HStack>
                    </VStack>
                </Footer>
            </Container>
        </Box>
    )
}

export default Index;