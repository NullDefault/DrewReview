import {Box, Link, Text, VStack} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";
import {NavBar} from "../components/TopNavBar";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer";
import {useWindowSize} from "../lib/windowSize";

const BoardApplications = () => {
    const windowSize = useWindowSize();
    return (
        <Box>
            <NavBar/>
            <div style={{
                width: windowSize.width,
                height: windowSize.height,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "fixed",
                zIndex: -1,
                backgroundSize: "cover",
                backgroundImage: "url('/forest.gif')",
                content: "",
                opacity: 0.8,
                backgroundBlendMode: "luminosity",
                WebkitFilter: "blur(3px)",
                MozFilter: "blur(3px)",
                OFilter: "blur(3px)",
                MsFilter: "blur(3px)",
                filter: "blur(3px)",
            }}/>
            <VStack>
                <BackgroundContainer>
                    <Text textAlign="center" m="36px" p="24px" rounded="md" bgColor="blue.700">
                        <h1>
                            Do you want to serve on the editorial board of The Drew Review? Send an application to be an editor!
                        </h1>
                        To apply, please submit the following:
                        <ul>
                            <li>
                                Writing sample (at least 5 pages and incorporating at least 2 scholarly sources)
                            </li>
                            <li>
                                Cover letter explaining why you would like to serve on the editorial board of The Drew Review
                            </li>
                            <li>
                                Nomination from a professor (sent via email)
                            </li>
                        </ul>
                        <Text mt="24px">
                            Send application materials to <Link href="mailto:hwells@drew.edu">Professor Hannah Wells<EmailIcon mx="8px" />
                        </Link>
                        </Text>
                    </Text>
                </BackgroundContainer>
                <Footer/>
            </VStack>
        </Box>
    )
}

export default BoardApplications;