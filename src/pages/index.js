import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { useAuth } from "../lib/auth";

const Index = () => {
    const auth = useAuth();
    return (
        <Container>
            <Hero title="Drew Review" />
            <Main>
                <Text>
                    Currently logged in user: <Code>{auth?.user?.email}</Code>
                </Text>

                <Button spacing={3} onClick={(e) => auth.signInWithGithub()}>
                    Sign In
                </Button>
                {auth?.user && (
                    <Button spacing={3} onClick={(e) => auth.signOut()}>
                        Sign Out
                    </Button>
                )}

                <List spacing={3} my={0}>
                    <ListItem>
                        <ListIcon icon="check-circle" color="green.500" />
                        <ChakraLink
                            isExternal
                            href="https://www.drew.edu/library/2019/08/19/drew-publications/"
                            flexGrow={1}
                            mr={2}
                        >
                            Current website <Icon as={ExternalLinkIcon} mx="2px" />
                        </ChakraLink>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="check-circle" color="green.500" />
                        <ChakraLink isExternal href="https://www.drew.edu" flexGrow={1} mr={2}>
                            Drew University <Icon as={ExternalLinkIcon} mx="2px" />
                        </ChakraLink>
                    </ListItem>
                </List>
            </Main>

            <DarkModeSwitch />
            <Footer>
                <Text>2020</Text>
            </Footer>
        </Container>
    )
}

export default Index