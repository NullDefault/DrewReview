import {Box, Link, Text, VStack} from "@chakra-ui/react";
import {NavBar} from "../components/TopNavBar";
import {BackgroundContainer} from "../components/BackgroundContainer";
import {Footer} from "../components/Footer";
import {useWindowSize} from "../lib/windowSize";
import {EmailIcon} from "@chakra-ui/icons";

const Submissions = () => {
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
                                Did you write a final research paper this semester that you would like to publish? Submit it to The Drew Review now!
                            </h1>
                            <p>
                                The Drew Review is Drew’s own peer-reviewed undergraduate research journal. Our mission is to showcase the intellectual vibrancy of the students of the CLA.
                            </p>
                            <Text my="24px">
                                Guidelines for submission:
                                <ul>
                                    <li>
                                        Any language
                                    </li>
                                    <li>
                                        Any discipline
                                    </li>
                                    <li>
                                        Word document (with the author’s name and any other identifying information removed)
                                    </li>
                                    <li>
                                        Students may be asked to make revisions
                                    </li>
                                </ul>
                            </Text>
                            <Text>
                                In addition, submissions to The Drew Review require a faculty nomination. Students who believe their work is exceptional should approach their professor to nominate them.
                            </Text>
                            <Text mt="24px">
                                Send submissions and nominations to the <Link href="mailto:drewreview@drew.edu">Drew Review board<EmailIcon mx="8px" />
                            </Link>
                            </Text>
                        </Text>
                    </BackgroundContainer>
                    <Footer/>
                </VStack>
            </Box>
        )
}

export default Submissions;