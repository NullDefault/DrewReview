import {
    Link as ChakraLink,
    Select,
    Icon,
    List,
    ListIcon,
    ListItem,
    Button
} from '@chakra-ui/react';
import {ExternalLinkIcon, TriangleDownIcon} from '@chakra-ui/icons';
import {Hero} from '../components/Hero';
import {Container} from '../components/Container';
import {Main} from '../components/Main';
import {DarkModeSwitch} from '../components/DarkModeSwitch';
import {Logo} from '../components/Logo';
import {Footer} from '../components/Footer';
import {useAuth} from "../lib/auth";
import {SideNav} from "../components/SideNav";
import {useState} from "react";
import {Text} from "@chakra-ui/layout";

const Index = () => {
    const auth = useAuth();
    const [chosenYear, setYear] = useState(2020)

    return (
        <Container className="background">
            <Hero title=""/>
            <Main>
                <SideNav children={!auth?.user ? // if user is already logged in, show sign in button...
                    <Button spacing={3} onClick={(e) => auth.signInWithGithub()}> Sign In </Button> :
                    <Button spacing={3} onClick={(e) => auth.signOut()}> Sign Out</Button> // otherwise the sign out button
                }/>
                <List spacing={3} my={0}>
                    <ListItem>
                        <ListIcon icon="check-circle" color="green.500"/>
                        <ChakraLink
                            isExternal
                            href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                            flexGrow={1}
                            mr={2}
                        >
                            Current website <Icon as={ExternalLinkIcon} mx="2px"/>
                        </ChakraLink>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="check-circle" color="green.500"/>
                        <ChakraLink isExternal href="https://www.drew.edu" flexGrow={1} mr={2}>
                            Drew University <Icon as={ExternalLinkIcon} mx="2px"/>
                        </ChakraLink>
                    </ListItem>
                </List>
            </Main>

            <DarkModeSwitch/>
            <Logo/>
            <Footer>
                <Select placeholder="Select year"
                        icon={<TriangleDownIcon />}
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
            </Footer>
        </Container>
    )
}

export default Index